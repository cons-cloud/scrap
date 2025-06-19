console.log("Content script loaded!");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received in content script:", request);

  if (request.action === "scanPosts") {
    const results = scanPosts();
    sendResponse({ data: results });
  }
  if (request.action === "downloadCSV") {
    const results = scanPosts();
    const csv = convertToCSV(results);
    downloadCSV(csv, 'posts.csv');
    sendResponse({ success: true });
  }
});

function scanPosts() {
  // Logique pour scanner les posts Facebook et LinkedIn
  const posts = document.querySelectorAll('[role="article"], .feed-shared-update-v2');
  const results = [];

  posts.forEach(post => {
    // Facebook
    const author = post.querySelector('a[role="link"]')?.innerText || post.querySelector('.feed-shared-actor__name')?.innerText || "N/A";
    const photo = post.querySelector('img')?.src || "N/A";
    const messageContent = post.querySelector('[data-testid="post_message"]')?.innerText || post.querySelector('.feed-shared-update-v2__description')?.innerText || "N/A";
    results.push({
      author,
      photo,
      messageContent
    });
  });

  return results;
}

function convertToCSV(arr) {
  const array = [Object.keys(arr[0] || {}).join(','), ...arr.map(obj => Object.values(obj).map(v => '"'+String(v).replace(/"/g,'""')+'"').join(','))];
  return array.join('\r\n');
}

function downloadCSV(csv, filename) {
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}