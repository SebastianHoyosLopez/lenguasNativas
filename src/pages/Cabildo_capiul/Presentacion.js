import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import image from '../../../public/image/presentacionCapiul.jpg';

const Presentacion = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ padding: '0 8px 0 8px' }}>
      <Grid>
        <Image src={image} alt="niño nueva esmeralda" />
      </Grid>
      <Grid sx={{ padding: '3rem', textAlign: 'justify' }}>
        <Typography variant="p" fontSize={25}>
          <p>
            El Taller Escuela en lenguas originarias de los pueblos tikuna, múrui, miraña y yukuna, llevado a cabo en el Cabildo de Pueblos Indígenas Unidos de Leticia Capiul, tuvo como objetivo
            salvaguardar conocimientos a través de la enseñanza de la lengua materna y los saberes tradicionales, cantos y bailes tradicionales por parte de conocedores de dichos pueblos.
          </p>
          <p>
            La ciudad de Leticia ha sido receptora de una gran cantidad de víctimas resultantes de procesos históricos en la región amazónica como la violencia vivida en esta zona desde los tiempos de
            las caucherías y el conflicto armado colombiano de los últimos cincuenta años. Esta ciudad oferta oportunidades para estas poblaciones en términos de educación, salud, comercio, vivienda
            y, en general, posibilidades de progreso. La cercanía a la triple frontera entre Colombia, Perú y Brasil, ha convertido a esta ciudad en un centro de intercambios, tránsito e
            interculturalidad. Por lo tanto, en este caso concreto, el Cabildo de los Pueblos Indígenas Urbanos de Leticia &quot;Capiul&quot; son fruto de esa historia y de la necesidad de
            organización por parte de estas comunidades indígenas.
          </p>
          <p>
            El cabildo &quot;Capiul&quot; se ubica en el barrio Gaitán, municipio Leticia del departamento del Amazonas y se articulan en la única maloca que se encuentra dentro del casco urbano de
            Leticia. &quot;Capiul&quot; nació el 29 de enero de 2011, como un punto de referencia de todas las personas indígenas que llegaban de las distintas regiones amazónicas, para que pudieran
            tener un lugar a dónde llegar y por esto se construyó la maloca. También, ha sido un espacio de reafirmación de su identidad dentro de la ciudad, para no perder sus costumbres y
            desarrollar sus encuentros como: danzas, producción de ambil y mambe, intercambio de saberes, entre otros (Daza; 2017. p.p. 04).
          </p>
          <p>
            Se diseñó y ofertó un Taller Escuela que contempló sesiones de práctica y de enseñanza de cantos y bailes tradicionales lideradas por cuatro maestros-sabedores de las lenguas de los
            pueblos indígenas magüta, múrui, miraña y yukuna. La metodología de estas sesiones de trabajo se ha fundado en el principio &quot;Aprender haciendo&quot;: cada maestro sabedor de la lengua
            ha compartido cantos de sus respectivos pueblos con un grupo de jóvenes aprendices pertenecientes al Cabildo, los ha explicado en sus aspectos lingüísticos y culturales, y ha enseñado los
            pasos de danza que los acompañan. Igualmente, la enseñanza fue complementada con contenido relacionado a expresiones de uso común de la lengua como: saludos, despedidas, presentación,
            agradecimiento, nombres de parientes, partes del cuerpo, formación de oraciones sencillas. De manera paralela, y dando continuidad a las temáticas del plan de formación se realizaron los
            trabajos para la creación de un Museo Vivo.
          </p>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Presentacion;
