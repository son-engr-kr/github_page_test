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
    const tabs = document.querySelectorAll('.tab-link');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 현재 active 클래스를 가진 모든 요소에서 active 클래스를 제거합니다.
            tabs.forEach(t => t.classList.remove('active'));
            
            // 클릭된 탭에 active 클래스를 추가합니다.
            this.classList.add('active');
            
            // 여기에 탭 내용을 로드하는 로직을 추가할 수 있습니다.
            // 예: loadContent(this.getAttribute('data-tab'));
        });
    });
    
    loadContent('home');
    document.querySelector('.tab-link').classList.add('active'); // 첫 번째 탭을 활성화
});