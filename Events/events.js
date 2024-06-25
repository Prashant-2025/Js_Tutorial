// Using this approach we don't get so much features that's why we should use Event Listeners
// document.getElementById('snow').onclick = function(){
//     alert('snow clicked');
// }

document.getElementById('snow').addEventListener('click', (e)=>{
    alert('owl clicked');
}, false)

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode

// Event Propagation:- The tracking of elements from inside to outside or from child to parent and vice versa.
// Two types:- Event Bubbling (false) and Event Capturing (true)

// Event Bubbling tracks the elements from inside to outside

document.getElementById('images').addEventListener('click', (e)=> {
    console.log("Clicked inside the ul");
}, false)

document.getElementById('snow').addEventListener('click', (e)=> {
    console.log("Snow Clicked");
    e.stopPropagation();  // This method is used to stop propagation
}, false)


// Event Capturing tracks the elements from outside to inside

document.getElementById('images').addEventListener('click', (e)=> {
    console.log("Clicked inside the ul");
}, true)

document.getElementById('snow').addEventListener('click', (e)=> {
    console.log("Snow Clicked");
    e.stopPropagation();
}, true)

document.getElementById('google').addEventListener('click', (e)=> {
    console.log("google clicked")
    e.preventDefault();
    e.stopPropagation();
})

// Ex:- Remove the image as we click on it

document.querySelector('#images').addEventListener('click', (e)=> {
    console.log(e.target.parentNode);
    if(e.target.tagName === 'IMG'){
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
    // removeIt.parentNode.removeChild(removeIt);
}, false)