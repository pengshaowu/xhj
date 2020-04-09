var li2 = document.getElementById('li2');
    var li3 = document.getElementById('li3');
    var li4 = document.getElementById('li4');
    var li5 = document.getElementById('li5');
    var li6 = document.getElementById('li6');
    function handleLi2() {
        li2.className = 'active';
        li3.className = '';
        li4.className = '';
        li5.className = '';
        li6.className = '';
        window.scrollTo(0,740);
    }
    function handleLi3() {
        li2.className = '';
        li3.className = 'active';
        li4.className = '';
        li5.className = '';
        li6.className = '';
        window.scrollTo(0,1282);
    }
    function handleLi4() {
        li2.className = '';
        li3.className = '';
        li4.className = 'active';
        li5.className = '';
        li6.className = '';
        window.scrollTo(0,1767);
    }
    function handleLi5() {
        li2.className = '';
        li3.className = '';
        li4.className = '';
        li5.className = 'active';
        li6.className = '';
        window.scrollTo(0,1985);
    }
    function handleLi6() {
        li2.className = '';
        li3.className = '';
        li4.className = '';
        li5.className = '';
        li6.className = 'active';
        window.scrollTo(0,1985);
    }
    window.addEventListener("scroll", this.handleScroll, true);
    function handleScroll() {
        var top = Math.ceil(document.documentElement.scrollTop || document.body.scrollTop);
        console.log(top);
        var nav = document.getElementById("nav");
        var info = document.getElementById('info');
        if(top >= 740){
            nav.style.position = 'fixed';
            nav.style.top = 30+'px';
            info.style.marginLeft = 300+'px';
        }else if(top < 740){
            nav.style.position = 'relative';
            nav.style.top = '0'
            info.style.marginLeft = 0;
        }
    }