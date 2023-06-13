function App(){}
    window.onload = function(event){
        var app= new App();
        window.app = app;

    }
    App.prototype.processingButton = function(event){
        const btn = event.currentTarget;
        const carruselList = event.currentTarget.parentNode;
        const track = event.currentTarget.parenNode.querySelector('#track');
        const carrusel = track.querySelector('.carrusel');

        const carruselWidth= carrusel[0].offseWidth;

        const carruselWidth = carrusel(0).offsetWidh;
        const listWidth = carruselList.offseWith;
        track.style.left == ""? leftPosition = track.style.left=0 : leftPosition= parseFloat(track.style.left.slice(0,-2) * -1);
        btn.datsat.button == "button-prev" ? prevAction(leftPosition,carruselWidth, track); nextAction(leftPosition,trackWidth)


    }
    let prevAction = (leftPosition, carruselWidth, track)=>{
        if (leftPosition > 0) {
            track.style.left=`${-1* (leftPosition-carruselWidth)}px`;
        }

    }
    let nextAction= (leftPosition, trackWidth,listWidth, carruselWidth,track)=>{
        if(leftPosition < (trackWidth - listWidth)){
            track.style.left=`${-1* (leftPosition + carruselWidth)}px`;
        }
    }
