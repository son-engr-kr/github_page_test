
function openTab(evt, tabName) {
    // 모든 탭 컨텐츠를 숨깁니다.
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // 모든 탭 링크를 비활성화합니다.
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 클릭된 탭과 연결된 탭 컨텐츠를 표시합니다.
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}