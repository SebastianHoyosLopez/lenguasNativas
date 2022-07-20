import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ImageMaestroLuis from '../../../public/image/MaestroLuisRimabake.jpg';
import ImageMaestroBalvina from '../../../public/image/BiografiaBalvina.jpg';

const Biography = () => {
  return (
    <div style={{ marginTop: '3rem' }}>
      <Typography variant="h3" align="center">
        biografías de los maestros sabedores
      </Typography>
      <div style={{ marginTop: '3rem', marginBottom: '3rem', textAlign: 'justify', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '400rem', padding: '2rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <Image src={ImageMaestroLuis} height={400} width={600} objectFit="cover" alt="Imagen de los maestros" />
          </div>
          <Typography variant="p">
            Don <strong>Luis Rimabake</strong>, el cacique de la comunidad de Nueva Esmeralda, pertenece a la etnia piinemuna (bora), denominación que quiere decir &apos;Gente de la mita de la
            tierra&lsquo;. Su clan de origen es el clan ajije, “hoja de caraná”. El abuelo cuenta que su padre le dejó el nombre tradicional Bake, el cual usó durante su juventud. Sin embargo, ya en
            su madurez, dos Luis recibió un nombre propio de anciano: Rimabake. Y es ya en posesión de ese nombre que ha fundado la maloca de la Comunidad de Nueva Esmeralda, hace más de veinte años.
            Don Luis Rimabake es médico tradicional y promotor de salud adscrito a la secretaria de salud de Amazonas. Y actualmente es la autoridad tradicional de su comunidad. <br /> Número de
            contacto: 3124537631
          </Typography>
        </div>
        <div style={{ width: '400rem', padding: '2rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <Image src={ImageMaestroBalvina} height={400} width={600} objectFit="cover" alt="Imagen de los maestros" />
          </div>
          <Typography variant="p">
            <strong>Balvina yacob</strong> es el nombre en castellano de la maestra sabedora del curso de lengua píínemuna impartido en la Comunidad Nueva Esmeralda; su nombre en lengua vernácula es
            Marimuye, que quiere decir “pluma de gavilán”. Doña Balvina tiene 59 años y es hablante de la lengua píínemuna desde su niñez. Sin embargo, ella cuenta que, desde los diez años, luego de
            ser ingresada en un internado, fue obligada a aprender el castellano, la lengua hoy dominante en su núcleo familiar. Aunque la abuela Balvina proviene de un clan píínemuna cuya
            especialidad es la carrera de yadiko o de tablón, al casarse con el abuelo Rimabake (dueño de la carrera de apujko), ha dejado de pertenecer al clan de sus hermanos y se considera hoy
            parte del clan caraná, el mismo de su esposo don Luis. Número de contacto: 3133358834
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Biography;
