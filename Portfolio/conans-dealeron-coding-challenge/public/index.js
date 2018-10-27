
/*
    @author: Conan Mafnas
    title: DealerOn Coding Test


*/


// State Management

const mainState = {
    titles: ['About', 'View the Community'], 
    contentTitle: ` Conan's DealerOn Coding Test`, 
    aboutContent: ``, 

}

//Retrieve Information

const retrieveData = (name) => {
    const retrieveData = localStorage.getItem(name);
    return JSON.parse(retrieveData); 
    
}


// Send Data 

const sendData = (name, data) => {
    const stringData = JSON.stringify(data); 
    return localStorage.setItem(name, stringData);
}


//Delete Data

const deleteData = (name) => {
    return localStorage.removeItem(name); 
}



//Creates the new LocalStorage Array 
const localStorageData = retrieveData('apiData'); 


const details = {
    data: [...localStorageData],
}


const {data} = details;




//Fetching to local API and rendering the data to the UI and/or View

const fetchData = () => {
    fetch('http://localhost:3000/data')
    .then(res => res.json())
    .then(data => sendData('apiData', data)); 
    console.log('Data Successfully Recieved');
    console.log('To fetch images from the dummy api, remove the comments from the renderApiData regarding the setAttribute methods :) ')
}




//Rendering Data to the DOM of index.html
const renderNavList = (state, parent) => {
    const {titles} = state; 
    titles.forEach(navItem => {
        const parentNode = document.querySelector(parent); 
        const li = document.createElement('li'); 
        parentNode.appendChild(li).textContent=navItem; 
    })
}

const renderContent = (state, parent) => {
    const {contentTitle} = state; 
    const parentNode = document.querySelector(parent);
    parentNode.textContent=contentTitle;
}

const renderAboutContent = (state, parent) => {
    let  {aboutContent} = state; 
    const parentNode = document.querySelector(parent); 
    const p = document.createElement('p')
    aboutContent = `In this application you will be able to view famous inventors, philsophers, and scientists that contributed to 
    the worlds growing technology and industries. In addition, you will be able to see thier picture, birthday, and thier unforgotten quotes they left
     behind on this earth for people around the world to always remember.`
     parentNode.appendChild(p).textContent=aboutContent; 
    
}

const renderApiData = (parent, data) => {
    data.forEach(items => {
        const parentNode = document.querySelector(parent);
        const div = document.createElement('div'); 
        
        const output = 
        `<p>Name: ${items.name} </p>
         <p>Birthday: ${items.birthday}</p>
         <p>Famous Quote: ${items.quote} </p> 
        `
        parentNode.appendChild(div).innerHTML+= output; 


        
       
    }); 
}  

const renderApiDataImg = (parent, data) => {
    data.forEach(items => {
        const parentNode = document.querySelector(parent)
        const div = document.createElement('div'); 
        const img = document.createElement('img');
        //img.setAttribute('src', `${items.image_url}`); 
        //img.setAttribute('alt', `${items.id}`);
        div.appendChild(img); 
       parentNode.appendChild(div);
        
    }); 
}  

//Redering Dynamic Code to the DOM

function renderDOM() {
    renderNavList(mainState, '.struct'); 
    renderContent(mainState, '#content_title'); 
    renderAboutContent(mainState, '.content'); 
    fetchData();
    renderApiData('#content', data); 
    renderApiDataImg('#picture', data);
    
}

renderDOM();


//Events 


const buttonLinkClick = (parent, url, text) => {
    const parentButtonNode = document.querySelector(parent); 
    parentButtonNode.addEventListener('click', (e) => {
        e.preventDefault(); 
        const loader = document.querySelector('.loader'); 
        const loaderTitle = document.getElementById('loadingText'); 
        loader.style.height='100%';
        loader.style.width='100%'; 
        loaderTitle.style.opacity='1'
        loaderTitle.textContent=text;
        setTimeout(() => {
            window.location.href=url;
        }, 1000)
         
    })
}


const navLinkClick = (parent, url) => {
    const parentButtonNode = document.querySelector(parent); 
    parentButtonNode.addEventListener('click', (e) => {
        e.preventDefault(); 
        window.location.href=url;
    })
    
}

const openGallery = () => {
    const gallery = document.getElementById('apiContent');

    document.querySelector('.struct li:nth-child(2)').addEventListener('click', (e) => {
        e.preventDefault();
        gallery.style.display="block"; 
        gallery.style.width="100%";
        gallery.style.height="100%"; 
    })

    document.getElementById('community').addEventListener('click', (e) => {
        e.preventDefault();
        gallery.style.display="block"; 
        gallery.style.width="100%";
        gallery.style.height="100%"; 
    })

    document.getElementById('vCommunity').addEventListener('click', (e) => {
        e.preventDefault();
        gallery.style.display="block"; 
        gallery.style.width="100%";
        gallery.style.height="100%"; 
    })
}

const closeGallery = () => {
    const gallery = document.getElementById('apiContent');
    document.getElementById('closeGallery').addEventListener('click', (e) => {
        e.preventDefault(); 
        gallery.style.display='none'; 
    })
}

const clicks = () => {
    buttonLinkClick('#portfolio', 'https://github.com/Conan-Official/Work-Portfolio', 'Redirecting to Conan\'s Portfolio'); 
    buttonLinkClick('#resume', 'https://github.com/Conan-Official/Work-Portfolio/blob/master/Conan%20Mafnas%20Official%20Resume.pdf', 'Redirecting to Conan\'s Resume'); 
    navLinkClick('.struct li:nth-child(1)', '#about_section');
    openGallery(); 
    closeGallery(); 
}

clicks(); 
















