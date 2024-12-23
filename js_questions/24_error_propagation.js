function a() {
    throw new Error('An error occurred');
  }
  
  function b() {
    a();
  }
  
  try {
    b();
  } catch (e) {
    console.error(e.message); // Outputs: An error occurred
  }