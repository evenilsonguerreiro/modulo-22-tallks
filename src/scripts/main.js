AOS.init();

const dataDoevento = new Date('dec 2,2024 19:00:00');
const timeStampDoevento = dataDoevento.getTime();

const contaAshoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();


    const distanciaDoevento = timeStampDoevento-timeStampAtual;

const diaEmMS = 1000 * 60 * 60 *24;
const horaEmMS = 1000 * 60 * 60;
const minutoEmMS = 1000 * 60;

const diasAteoevento = Math.floor(distanciaDoevento / diaEmMS);
const horasAteoevento = Math.floor((distanciaDoevento % diaEmMS) / horaEmMS);
const minutosAteoevento = Math.floor((distanciaDoevento % horaEmMS) / minutoEmMS);
const segundosAteoevento = Math.floor((distanciaDoevento % minutoEmMS) / 1000);

document.getElementById('contador').innerHTML = `${diasAteoevento}d ${horasAteoevento}h ${minutosAteoevento}m ${segundosAteoevento}s`
},1000);


