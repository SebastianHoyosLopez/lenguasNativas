import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import image from '../../../public/image/saberesEsmeralda.jpg';

const SaberesOficios = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ padding: '0 8px 0 8px' }}>
      <Grid>
        <Image src={image} alt="niño nueva esmeralda" height={500} width={700} />
      </Grid>
      <Grid sx={{ padding: '3rem', textAlign: 'justify' }}>
        <Typography variant="p" fontSize={25}>
          <p>
            La lengua `p~~íí~~nemuna`(o bora) es una de las veintiún familias lingüísticas nativas existentes en territorio colombiano. Landaburu la ubica en el grupo de lenguas de “proyección
            regional” en Sudamérica, junto con las familias uitoto (con la que ha sido emparentada por algunos lingüistas), tukano, macú-puinave, sáliva-piaroa, guahibo, chocó y barbacoa (Landaburu,
            2004-5, p. 7). El pueblo `p~~íí~~nemuna` hace parte de un complejo cultural llamado “Gente de Centro”, al lado de los pueblos múrui, miraña (lengua esta última con la que tiene múltiples
            semejanzas), muinane, andoque, ocaina y tanimuka. Según un documento de la Dirección de Poblaciones del año 2005, más del 90 % del pueblo `p~~íí~~nemuna` reside en el departamento de
            Amazonas, principalmente en las márgenes del río Putumayo y de uno de sus afluentes principales, el río Igaraparaná. Actualmente, el pueblo `p~~íí~~nemuna` ocupa un amplio territorio,
            llamado Predio Putumayo. Este les fue entregado en 1988 como medida de reparación por las injusticias históricas sufridas a manos de las Casa Arana primero y de los colonos y diversos
            grupos armados que llegaron a ese territorio a lo largo del siglo XX.
          </p>
          <p>
            En lo que respecta al taller escuela adelantado en la Comunidad Nueva Esmeralda, no se centró en un único oficio, sino en varios oficios complementarios, todos relacionados con el espacio
            articulador de la cultura `p~~íí~~nemuna`, la maloca. En primer lugar, se abordó el oficio de tejer techo de maloca, un saber en esencia masculino. Este saber hace parte de un oficio más
            general: el oficio de la cestería, imprescindible en el repertorio de saberes (o “canasto”) de un hombre `p~~íí~~nemuna` bien formado. Aprovechando este conocimiento de los sabedores de la
            comunidad en la confección de techos de palmas de caraná, se hicieron entonces reparaciones de la maloca que permitieron adecuarla como espacio de formación o `*eemuja*`.
          </p>
          <p>
            Un segundo saber-oficio reivindicado durante este taller escuela fue el oficio de sembrar y de cuidar la chagra o `*um~~i~~he*`. Este oficio es central en el contexto de la cultura del
            pueblo píínemuna. La `*um~~i~~he*` o chagra es un espacio vinculado al género femenino, donde la mujer siembra plantas con las que se identifica prototípicamente (la `*pajkyomu*`o yuca
            dulce, el `*dihou*` o ají, la `*majtsaka*` o maní). Los píínemuna comparan a la mujer especialmente con la `*pajkyomu*` o “yuca dulce”. La razón de esta comparación radica en el hecho de
            que, mediante el procesamiento de esta planta, ella prepara bebidas como la `*kagunuko*` o caguana (una bebida hecha a base del almidón de la yuca dulce) o como la manicuera (una especie
            de caldo espeso hecho con la yuca hervida) que tienen como fin principal “enfriar” la “rabia” y el “calor” que los hombres absorben de sustancias consideradas “calientes” como la `*ipi*` o
            coca o como el `*bañe*` o pasta de tabaco `(*ambil*)`. El oficio de sembrar la chagra se abordó en diversas sesiones por medio del estudio de la terminología asociada con este espacio. En
            este sentido, se describieron los diversos procesos que allí se llevan a cabo, las semillas y frutos que se producen, y las herramientas empleadas para su transformación.
          </p>
          <p>
            Un tercer grupo de oficios abordados durante el Taller escuela fue el de los que se realizan con objetos o utensilios de la maloca. Se abordaron los nombres e historias tradicionales de
            esos objetos. Este enfoque en la terminología y los significados culturales asociados con los elementos y utensilios de la maloca ha permitido mostrar que los dos oficios estudiados en los
            dos primeros núcleos: el oficio de tejer techo y el de sembrar chagra, son requisitos necesarios para poder sentarse en una maloca, esto es, para poder constituir la entidad social,
            política y ritual que articula la cultura del pueblo `p~~íí~~nemuna` como un todo.
          </p>
          <p>
            Dicho en pocas palabras, la maloca es expresión de la autonomía de un hombre y de una mujer (en este caso, del abuelo Luis Rimabake y de la abuela Balvina Yacobs) que se unen para hacer
            prosperar y reproducir un núcleo familiar. Con todo, para que esta unión pueda llegar a su fin, tanto el hombre como la mujer deben saber llevar a cabo, entre muchos otros, los oficios
            abordados a lo largo del taller escuela. En primer lugar, la mujer debe cultivar un espacio de la selva previamente desmontado por los hombres, llamado chagra, el cual simboliza el género
            femenino a través de plantas y substancias como la `*pajkyomu*` o yuca dulce o la `*kagunuko*`o caguana. Y segundo, el hombre debe saber tejer el techo de una maloca y, de manera general,
            debe ser conocedor del oficio de la cestería, oficio imprescindible en el repertorio general de saberes (o “canasto”) de un hombre bien formado.
          </p>
          Finalmente, como los `p~~íí~~nemuna` dan un valor especial a los cantos y a las fiestas rituales en que los ejecutan, en la fase de diseño del plan de formación de este taller escuela se
          había previsto abordar el oficio de cantor, que resulta muy relevante desde el punto de vista cultural puesto que es un medio de socialización de la Gente de Centro. Se había proyectado el
          aprendizaje de algunos cantos de las fiestas Bahja y apújko, de cantos de arrullo, de trabalenguas y de otras formas verbales típicas de la lengua y la cultura `p~~íí~~nemuna`, pero el
          límite de tiempo impidió llegar hasta este núcleo de formación, como quedó asentado en el acta de finalización del taller escuela levantada por la propia comunidad.
        </Typography>
      </Grid>
    </Grid>
  );
};
export default SaberesOficios;
