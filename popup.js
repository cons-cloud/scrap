document.getElementById('scan').addEventListener('click', () => {
  console.log("Scan button clicked!");
  // Envoie un message au script d'arrière-plan pour scanner les posts
  chrome.runtime.sendMessage({ action: "scanPosts" }, (response) => {
      if (response && response.data) {
          console.log("Posts scanned:", response.data);
          // Affichez les résultats dans la popup
          const resultsDiv = document.getElementById('results');
          resultsDiv.innerHTML = '';
          response.data.forEach(post => {
              const postDiv = document.createElement('div');
              postDiv.innerHTML = `<p><strong>Auteur:</strong> ${post.author || post.name || 'N/A'}</p>` +
                                  `<p><strong>Message:</strong> ${post.messageContent || post.messages || 'N/A'}</p>` +
                                  (post.photo ? `<img src="${post.photo}" alt="photo" />` : '');
              resultsDiv.appendChild(postDiv);
          });
      } else if (response && response.error) {
          console.error("Error scanning posts:", response.error);
      }
  });
});

document.getElementById('download-csv').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0] && tabs[0].id) {
          chrome.tabs.sendMessage(tabs[0].id, { action: "downloadCSV" }, (response) => {
              if (response && response.success) {
                  console.log("CSV downloaded successfully!");
              } else {
                  console.error("Failed to download CSV:", response?.error);
              }
          });
      }
  });
});