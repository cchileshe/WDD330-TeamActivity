export function getJSON(url) {
  return fetch(url).then((response)=> {
    if (!response.ok) {
      throw Error(`Code: ${response.status}, Status: ${response.statusText}`);
    } else {
      return response.json();
    }
  }).catch((error) => {
    console.log(error);
  })
}

export function getLocation(options) {
  return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};
