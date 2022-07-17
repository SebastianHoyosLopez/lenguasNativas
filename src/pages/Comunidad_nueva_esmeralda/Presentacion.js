import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import image from '../../../public/image/saberes.jpg';

const Presentacion = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ padding: '0 8px 0 8px' }}>
      <Grid>
        <Image src={image} alt="niño nueva esmeralda" height={400} width={400} />
      </Grid>
      <Grid sx={{ padding: '3rem', textAlign: 'justify' }}>
        <Typography variant="p" fontSize={25}>
          <p>
            El Taller Escuela para la Salvaguarda de la lengua bora llevado a cabo en la Comunidad Nueva Esmeralda, bajo la coordinación de la Escuela Taller de Boyacá, tuvo como objetivo salvaguardar
            y transmitir conocimientos en torno a la maloca o `*baaja*`y la chagra o `*um~~i~~he*`mediante la enseñanza de la lengua `p~~íí~~nemuna` (bora), y fue realizado durante los meses de
            diciembre de 2021 y abril de 2022. La comunidad de Nueva Esmeralda se ubica a orillas del curso inferior del río Igaraparaná, en territorio del resguardo llamado Predio Putumayo.
            Administrativamente, esta comunidad está en la jurisdicción del municipio de Puerto Arica, Departamento de Amazonas, municipio asentado cerca de la desembocadura del río Igaraparaná en el
            Putumayo.
          </p>
          <p>
            De acuerdo con el testimonio del abuelo Luis Rimabake, la maloca de la comunidad de Nueva Esmeralda fue fundada hace unos veinte años, cuando él decidió continuar con la tradición heredada
            de su padre luego de su muerte. La comunidad está formada por un pequeño grupo de familias ligadas por vínculos de parentesco. Estas familias viven en residencias articuladas alrededor de
            la maloca dirigida por el abuelo Rimabake, en cuyo mambeadero se reúnen los miembros masculinos del poblado. El sustento de la comunidad todavía depende en gran medida del cultivo de la
            chagra, de la pesca y de la caza de animales silvestres. En la comunidad también hay una escuela de educación básica primaria, en donde los niños del poblado pueden cursar hasta el grado
            quinto.
          </p>
          <p>
            En esta comunidad se diseñó y ofertó un Taller Escuela que contempló sesiones de transmisión de historias y de conocimientos tradicionales sobre la lengua `p~~íí~~nemuna`, mediante la
            enseñanza acerca de oficios ligados a la maloca o `*baaja*` y la chagra o `*um~~i~~he*`. Estas sesiones fueron lideradas por la maestra-sabedora Balvina Yacob Imis, hablante de
            `p~~íí~~nemuna` desde su niñez. La metodología de estas sesiones de trabajo se ha fundado en el principio `Aprender haciendo`. Por eso, antes de iniciar propiamente las actividades
            formativas, se adelantó también una `minga` para reparar el techo de la maloca, en la cual participaron los miembros masculinos de la comunidad, jóvenes y adultos. Luego, se estudió
            detalladamente el alfabeto para identificar las particularidades fonológicas de lengua `p~~íí~~nemuna`, haciendo énfasis en ejercicios de pronunciación. Y, en tercer lugar, se abordaron
            los conocimientos ligados a los oficios de la maloca y de la chagra, que siempre iban acompañados de actividades prácticas, de visitas y observaciones guiadas, y de ejercicios de
            investigación con sabedores tradicionales. Se había previsto trabajar además con cantos tradicionales en lengua `p~~íí~~nemuna`, pero el límite de tiempo impidió llegar a este núcleo de
            formación.
          </p>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Presentacion;
