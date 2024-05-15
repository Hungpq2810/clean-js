// Sử dụng async/await để tránh callback hell và làm code dễ đọc

getData(function(a) {
  parseData(a, function(b) {
    processData(b, function(c) {
      displayData(c, function(d) {
        console.log('Done');
      });
    });
  });
});

async function fetchData() {
  let a = await getData();
  let b = await parseData(a);
  let c = await processData(b);
  await displayData(c);
  console.log("Done");
}

fetchData();
