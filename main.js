import './style.css'

 /* Desplazamiento smooth */
 document.addEventListener("DOMContentLoaded", function() {
  
  const links = document.querySelectorAll('nav .btns a');

 
  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); 
          const linkHref = event.target.href;
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          

          targetSection.scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});

/* Render de contenido*/ 

document.addEventListener('DOMContentLoaded', () => {

  const main = document.createElement('main');

  // Sección 1: About
  const seccion1 = document.createElement('section');
  seccion1.id = 'seccion1';
  seccion1.className = 'about';

  const contenedor = document.createElement('div');

  const h1 = document.createElement('h1');
  h1.textContent = 'Adrian Serpa Arauz';
  const h3 = document.createElement('h3');
  h3.className = 'text-animation';
  h3.textContent = 'JUNIOR FULL-STACK DEV';
  const foto = document.createElement('img');
  foto.src = './assets/foto.jpg';
  foto.alt = 'adrian';
  seccion1.appendChild(foto);
  contenedor.appendChild(h1);
  contenedor.appendChild(h3);
  seccion1.appendChild(contenedor);
  main.appendChild(seccion1);

  // Sección 2: Social
  const seccion2 = document.createElement('section');
  seccion2.id = 'seccion2';
  seccion2.className = 'social';

  const linkedin = document.createElement('a');
  linkedin.href = 'https://www.linkedin.com/in/adrian-serpa-arauz-649355288/';
  linkedin.target = '_blank';
  linkedin.rel = 'noopener';
  const linkedinImg = document.createElement('img');
  linkedinImg.width = 50;
  linkedinImg.height = 50;
  linkedinImg.src = 'https://img.icons8.com/ios-filled/50/linkedin.png';
  linkedinImg.alt = 'linkedin';
  linkedin.appendChild(linkedinImg);

  const whatsapp = document.createElement('a');
  whatsapp.href = 'https://api.whatsapp.com/send?phone=34638420548';
  const whatsappImg = document.createElement('img');
  whatsappImg.width = 50;
  whatsappImg.height = 50;
  whatsappImg.src = 'https://img.icons8.com/ios-filled/50/whatsapp--v1.png';
  whatsappImg.alt = 'whatsapp--v1';
  whatsapp.appendChild(whatsappImg);
  whatsapp.appendChild(document.createTextNode(' +34 638 42 05 48'));

  const github = document.createElement('a');
  github.href = 'https://github.com/AdSerp';
  github.target = '_blank';
  github.rel = 'noopener';
  const githubImg = document.createElement('img');
  githubImg.width = 50;
  githubImg.height = 50;
  githubImg.src = 'https://img.icons8.com/ios-filled/50/github.png';
  githubImg.alt = 'github';
  github.appendChild(githubImg);

  seccion2.appendChild(linkedin);
  seccion2.appendChild(whatsapp);
  seccion2.appendChild(github);
  main.appendChild(seccion2);

  // Sección 3: Projects
  const seccion3 = document.createElement('section');
  seccion3.id = 'seccion3';
  seccion3.className = 'projects';

  const proyectos = [
    { href: 'https://colorflippertpmba.netlify.app/', texto: 'COLOR FLIPPER' },
    { href: 'https://rolgame.netlify.app/', texto: 'ROL GAME' },
    { href: 'https://jsprojecttpmba.netlify.app/', texto: 'LANDING PAGE' },
    { href: 'https://digitalagencyproyect.netlify.app/', texto: 'AGENCY PORTFOLIO' },
    { href: 'https://github.com/AdSerp/JS', texto: 'EJERCICIOS' }
  ];

  proyectos.forEach(proyecto => {
    const card = document.createElement('div');
    card.className = 'card';

    const a = document.createElement('a');
    a.href = proyecto.href;
    a.target = '_blank';
    a.rel = 'noopener';
    a.innerHTML = `<p><strong>${proyecto.texto}</strong></p>`;

    card.appendChild(a);
    seccion3.appendChild(card);
  });

  main.appendChild(seccion3);

  // Sección 4: Experience
  const seccion4 = document.createElement('section');
  seccion4.id = 'seccion4';
  seccion4.className = 'experience';

  const experiencias = [
    { href: 'https://www.adecco.es/', imgSrc: './assets/adecco.png', alt: 'adecco', descripcion: 'Me encargaba tanto del mantenimiento y producción de webs para terceros, como de la atención a peticiones especiales de estos.' },
    { href: 'https://www.newyorker.de/es/', imgSrc: './assets/newyorker.png', alt: 'newYorker', descripcion: 'Ocupaba el puesto de desarrollador Junior en un equipo encargado del mantenimiento y maquetamiento de la web en España.' },
    { href: 'https://www.pentaweb.es/', imgSrc: './assets/pentaweb.jpg', alt: 'pentaweb', descripcion: 'Me encargaba del diseño de tiendas online, implementando catálogos de productos totalmente clasificados y organizados por categorías.' },
    { href: 'https://garajedeideas.com/', imgSrc: './assets/garajeideas.png', alt: 'garajedeideas', descripcion: 'Formé parte de un gran equipo encargado de la conceptualización del nuevo eCommerce de IKEA.' },
    { href: 'https://www.fxstreet.es/', imgSrc: './assets/fxstreet.jpg', alt: 'fxstreet', descripcion: 'Responsable de maquetación desde cero y mantenimiento de la página, la cual se encarga de dar noticias actualizadas del comercio internacional y la economía.' }
  ];

  const ul = document.createElement('ul');
  experiencias.forEach(exp => {
    const li = document.createElement('li');

    const a = document.createElement('a');
    a.href = exp.href;
    a.target = '_blank';
    a.rel = 'noopener';
    const img = document.createElement('img');
    img.src = exp.imgSrc;
    img.alt = exp.alt;
    a.appendChild(img);

    const p = document.createElement('p');
    p.textContent = exp.descripcion;

    li.appendChild(a);
    li.appendChild(p);
    ul.appendChild(li);
  });

  seccion4.appendChild(ul);
  main.appendChild(seccion4);

  // Sección 5: Skills
  const seccion5 = document.createElement('section');
  seccion5.id = 'seccion5';
  seccion5.className = 'skills';

  const container = document.createElement('div');
  container.className = 'container';

  const skills = [
    { src: 'https://img.icons8.com/color/200/css3.png', alt: 'css3' },
    { src: 'https://img.icons8.com/color/200/html-5--v2.png', alt: 'html-5--v2' },
    { src: 'https://img.icons8.com/color/100/javascript--v1.png', alt: 'javascript--v1' },
    { src: 'https://img.icons8.com/color/200/arduino.png', alt: 'arduino' }
  ];

  skills.forEach(skill => {
    const img = document.createElement('img');
    img.width = 200;
    img.height = 200;
    img.src = skill.src;
    img.alt = skill.alt;
    container.appendChild(img);
  });

  seccion5.appendChild(container);
  main.appendChild(seccion5);
  document.body.appendChild(main);
});
