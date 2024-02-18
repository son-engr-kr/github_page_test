function loadContent(tabName) {
    fetch(`tabs/${tabName}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the content:', error);
            document.getElementById('content').innerHTML = '<p>Error loading content.</p>';
        });
}

// 페이지 로드 시 'Home' 탭의 내용을 자동으로 로드
document.addEventListener('DOMContentLoaded', function() {
    loadContent('home');
});