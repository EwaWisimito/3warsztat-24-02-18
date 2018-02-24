(function(){


    function makeMole(){
        var mole = document.createElement('div')

        mole.classList.add('mole')

        mole.style.left = '100px'
        mole.style.top = '100px'

        document.querySelector('body').appendChild(mole)
    }

    makeMole()
})()