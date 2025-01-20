"use client"
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./jobs.module.css";

const TimestampConverter = (unixTimestamp:number) => {

  // Convert to milliseconds and create a Date object
  const date = new Date(unixTimestamp * 1000);

  // Format the date
  const formattedDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true, // Adjust for 12-hour format
  });

  return formattedDate;
};

export default function Home() {
  const [JobIds, setJobsIds] = useState<string[]>([]);
  const [JobsDetail, setJobsDetail] = useState<any[]>([]);
  const [loading, setLoading] = useState({
    JobIdsLoading: false,
    JobsDetailLoading: false,
  });
  const [currentJobIndex, setJobIndex] = useState(0);

  const fetchSingleJob = (id: string) => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);

  }
  console.log('currentJobIndex', currentJobIndex);
  console.log('jobid', JobIds)
  console.log('JobsDetail', JobsDetail)


  useEffect(() => {
    getJobsId();
  }, []);
  const getJobsDetail = async (jobArr: any[]) => {
    setLoading({ JobIdsLoading: false, JobsDetailLoading: true });
    try {
      Promise.allSettled(jobArr.map((id) => fetchSingleJob(id))).then((res) => {
        console.log('res', res);
        res.forEach((r) => {
          if (r.status === "fulfilled") {
            console.log(r.value);
            r.value.json().then((resDetail) => {
              console.log('resDetail', resDetail);
              setJobsDetail((prev: any) => {
                return [...prev, resDetail];
              })
            }
            ).catch((err) => {
              console.log('errr', err);
            })
          }
        });
        setLoading({ JobIdsLoading: false, JobsDetailLoading: false });
      }).catch((err) => {
        console.log('errr', err);
      })
      setJobIndex((prev) => prev + 6);

    } catch (error) {
      console.log(error);
    }
  };

  const getJobsId = async () => {
    setLoading({ JobIdsLoading: true, JobsDetailLoading: false });
    try {
      const res = await fetch("https://hacker-news.firebaseio.com/v0/jobstories.json");
      const data = await res.json();
      setJobsIds([...data]);
      getJobsDetail(data.slice(currentJobIndex, 6));
      setLoading({ JobIdsLoading: false, JobsDetailLoading: false });
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className=" items-center justify-items-center">
      <div>
        <h1>Hacker New Job Board</h1>
        {
          loading.JobIdsLoading ? <span>laoding....</span> : <>
            {
              JobsDetail && JobsDetail.length > 0 && JobsDetail.map((i) => {
                return (
                  <div className={styles.jobCard} key={i?.id}>
                    <a href={i?.url ? i?.url : "/"} target="_blank" className={styles.jobTitle}>{i?.title}</a>

                    <div className={styles.jobDetail}>
                      <h4>By {i?.by}</h4><span>{TimestampConverter(i?.time)}</span>
                    </div>

                  </div>
                )
              })
            }
            {
              loading.JobsDetailLoading && <span>loadig Job Deatails....</span>
            }
            {
              JobIds && JobIds.length > 0 && (JobIds.length !== JobsDetail.length) && <div className="mt-6">
                <button onClick={() => {
                  getJobsDetail(JobIds.slice(currentJobIndex, currentJobIndex + 6));
                }}>Load more...</button>
              </div>
            }
          </>
        }


      </div>
    </div>
  );
}
