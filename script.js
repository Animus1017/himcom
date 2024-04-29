const pgl=document.querySelector('[pgl]');
const pgr=document.querySelector('[pgr]');
const pg1=document.querySelector('[pg1]');
const pg2=document.querySelector('[pg2]');
const pg3=document.querySelector('[pg3]');
const whl=document.querySelector('[whl]');
const whr=document.querySelector('[whr]');
const wh1=document.querySelector('[wh1]');
const wh2=document.querySelector('[wh2]');
const wh3=document.querySelector('[wh3]');
const wh4=document.querySelector('[wh4]');
const wh5=document.querySelector('[wh5]');
const wh6=document.querySelector('[wh6]');
const wh7=document.querySelector('[wh7]');
const wh8=document.querySelector('[wh8]');
const whradio =document.querySelectorAll('.wh-radio');
const heroradio =document.querySelectorAll('.hero-radio');
const hero =document.querySelectorAll('.hero');
const hamburger=document.querySelector('[hamburger]');
const hamburgerdiv=document.querySelector('[hamburgerdiv]');
let current_pg,current_wh,current_whradio,current_hero,current_heroradio,current_heroindex;

// initialisation
init();
function init(){
    current_wh=wh1;
    current_pg=pg1;
    current_heroindex=0;
    current_hero=hero[0];
    current_whradio=whradio[0];
    current_heroradio=heroradio[0];
    current_pg.classList.remove('hidden');
    current_pg.classList.add('grid');
    current_wh.classList.remove('hidden');
    current_wh.classList.add('flex');
    current_whradio.classList.remove('bg-[#00000080]');
    current_whradio.classList.add('bg-[#dd9221]');
    current_heroradio.classList.add('bg-white');
    current_hero.classList.remove('opacity-0');
    current_hero.classList.add('opacity-100');
    changeHero();
}

// photo gallery script
pgl.addEventListener('click',switchpgl);
pgr.addEventListener('click',switchpgr);
function switchpgl(){
    if( current_pg===pg1){
        current_pg.classList.remove('grid');
        current_pg.classList.add('hidden');
        current_pg=pg3;
        current_pg.classList.remove('hidden');
        current_pg.classList.add('grid');
    }
    else if( current_pg===pg3){
        current_pg.classList.remove('grid');
        current_pg.classList.add('hidden');
        current_pg=pg2;
        current_pg.classList.remove('hidden');
        current_pg.classList.add('grid');
    }
    else{
        current_pg.classList.remove('grid');
        current_pg.classList.add('hidden');
        current_pg=pg1;
        current_pg.classList.remove('hidden');
        current_pg.classList.add('grid');
    }
}
function switchpgr(){
    if( current_pg===pg1){
        current_pg.classList.remove('grid');
        current_pg.classList.add('hidden');
        current_pg=pg2;
        current_pg.classList.remove('hidden');
        current_pg.classList.add('grid');
    }
    else if( current_pg===pg2){
        current_pg.classList.remove('grid');
        current_pg.classList.add('hidden');
        current_pg=pg3;
        current_pg.classList.remove('hidden');
        current_pg.classList.add('grid');
    }
    else{
        current_pg.classList.remove('grid');
        current_pg.classList.add('hidden');
        current_pg=pg1;
        current_pg.classList.remove('hidden');
        current_pg.classList.add('grid');
    }
}

//why himcom script
whl.addEventListener('click',switchwhl);
whr.addEventListener('click',switchwhr);
function switchwhl(){
    if( current_wh===wh1){
        current_wh.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=wh8;
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[7];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
    }
    else if( current_wh===wh8){
        current_pg.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=wh7;
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[6];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
    }
    else if( current_wh===wh7){
        current_pg.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=wh6;
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[5];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
    }
    else if( current_wh===wh6){
        current_pg.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=wh5;
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[4];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
    }
    else if( current_wh===wh5){
        current_pg.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=wh4;
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[3];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
    }
    else if( current_wh===wh4){
        current_pg.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=wh3;
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[2];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
    }
    else if( current_wh===wh3){
        current_pg.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=wh2;
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[1];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
    }
    else{
        current_wh.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=wh1;
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[0];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
    }
}
function switchwhr(){
    if( current_wh===wh1){
        current_wh.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=wh2;
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[1];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
    }
    else if( current_wh===wh2){
        current_pg.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=wh3;
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[2];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
    }
    else if( current_wh===wh3){
        current_pg.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=wh4;
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[3];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
    }
    else if( current_wh===wh4){
        current_pg.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=wh5;
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[4];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
    }
    else if( current_wh===wh5){
        current_pg.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=wh6;
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[5];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
    }
    else if( current_wh===wh6){
        current_pg.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=wh7;
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[6];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
    }
    else if( current_wh===wh7){
        current_pg.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=wh8;
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[7];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
    }
    else{
        current_wh.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=wh1;
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[0];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
    }
}
whradio.forEach((radio,index)=>{
    radio.addEventListener('click',()=>{
        whradioClick(index);
    });
});
function whradioClick(index){
    if(current_whradio===whradio[index])
    return;
    else{
        current_whradio.classList.remove('bg-[#dd9221]');
        current_whradio.classList.add('bg-[#00000080]');
        current_whradio=whradio[index];
        current_whradio.classList.remove('bg-[#00000080]');
        current_whradio.classList.add('bg-[#dd9221]');
        current_wh.classList.remove('flex');
        current_wh.classList.add('hidden');
        current_wh=eval(`wh${index+1}`);
        current_wh.classList.remove('hidden');
        current_wh.classList.add('flex');
    }
}


// hero script
heroradio.forEach((radio,index)=>{
    radio.addEventListener('click',()=>{
        heroradioClick(index);
    });
});
function heroradioClick(index){
    if(current_heroradio===heroradio[index])
    return;
    else{
        current_heroradio.classList.remove('bg-white');
        current_heroradio=heroradio[index];
        current_heroradio.classList.add('bg-white');
        current_hero.classList.remove('opacity-100');
        current_hero.classList.add('opacity-0');
        current_hero=hero[index];
        current_hero.classList.remove('opacity-0');
        current_hero.classList.add('opacity-100');
        current_heroindex=index;
    }
}
function changeHero(){
    setTimeout(()=>{
        current_heroradio.classList.remove('bg-white');
        current_hero.classList.remove('opacity-100');
        current_hero.classList.add('opacity-0');
        if(current_heroindex===8)
        current_heroindex=-1;
        current_heroindex++;
        current_heroradio=heroradio[current_heroindex];
        current_heroradio.classList.add('bg-white');
        current_hero=hero[current_heroindex];
        current_hero.classList.remove('opacity-0');
        current_hero.classList.add('opacity-100');
        changeHero();
    },5000)
}


// responsive navbar
hamburger.addEventListener('click',changeNav);
function changeNav(){
    if(hamburger.classList.contains('text-[#cc0000]')){
        hamburger.classList.add('text-white');
        hamburger.classList.remove('text-[#cc0000]');
        hamburger.classList.remove('rotate-90');
        hamburgerdiv.classList.remove('scale-x-100');
        hamburgerdiv.classList.add('scale-x-0');
    }
    else{
        hamburger.classList.remove('text-white');
        hamburger.classList.add('text-[#cc0000]');
        hamburger.classList.add('rotate-90');
        hamburgerdiv.classList.remove('scale-x-0');
        hamburgerdiv.classList.add('scale-x-100');
    }
}
