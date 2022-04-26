const Planets = [
    {
      id: 1,
      name: "Mars",
      gravity: 3.7,
      img:
        "https://res.cloudinary.com/hakancabbar/image/upload/v1650589618/GEZEGENLER/MARS_m8ganj.webp",
      text:
        "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often called the Red Planet.",
    },
    {
      id: 2,
      name: "World",
      gravity: 9.8,
      img:
        "https://res.cloudinary.com/hakancabbar/image/upload/v1650589615/GEZEGENLER/D%C3%9CNYA_s8a8lj.jpg",
      text:
        "In its most general sense, the term world refers to the totality of entities, to the whole of reality or to everything that is.",
    },
    {
      id: 3,
      name: " Venus",
      gravity: 8.8,
      img:
        "https://res.cloudinary.com/hakancabbar/image/upload/v1650589615/GEZEGENLER/VEN%C3%9CS_trol5k.webp",
      text:
      "Venus is the second planet from the Sun and is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be visible to the naked eye in broad daylight.",
    },
    {
      id: 4,
      name: "Mercury",
      gravity: 3.7,
      img:
        "https://res.cloudinary.com/hakancabbar/image/upload/v1650589614/GEZEGENLER/MERK%C3%9CR_c8h5i9.jpg",
      text:
        "Mercury is the smallest planet in the Solar System and the closest to the Sun.",
    },
    {
        id: 5,
        name: "Jupiter",
        gravity: 24.8,
        img:
          "https://res.cloudinary.com/hakancabbar/image/upload/v1650589614/GEZEGENLER/jupiter_yotwpx.jpg",
        text:
          "Jupiter is the fifth planet from the Sun and the largest in the Solar System.",
      },
  ];



  const img = document.getElementById("img");
  const gravity= document.getElementById("gravity");
  const names = document.getElementById("name");
  const desc= document.getElementById("description");

  const prevBtn= document.querySelector(".prevBtn");
  const nextBtn = document.querySelector(".nextBtn");



  let currentPlanets = 0
  


  window.addEventListener("DOMContentLoaded", function () {
    const item = Planets[currentPlanets];
    img.src = item.img;
    gravity.textContent="THE PLANET GRAVITY " +   item.gravity;
    names.textContent = item.name;
    desc.textContent = item.text;
  });


  function showPlanets(planet){
    const item = Planets[currentPlanets];
    img.src = item.img;
    gravity.textContent="THE PLANET GRAVITY " +   item.gravity;
    names.textContent = item.name;
    desc.textContent = item.text;
  }




  nextBtn.addEventListener("click",function(){

    if(currentPlanets>=Planets.length-1){

        currentPlanets=0
        showPlanets(Planets[currentPlanets])
    }

    else{
        currentPlanets++
        showPlanets(Planets[currentPlanets])
    }
  })


  prevBtn.addEventListener("click",function(){

    if(currentPlanets===0){

        currentPlanets=Planets.length-1
        showPlanets(Planets[currentPlanets])
    }

    else{
        currentPlanets--
        showPlanets(Planets[currentPlanets])
    }
  })


  

  