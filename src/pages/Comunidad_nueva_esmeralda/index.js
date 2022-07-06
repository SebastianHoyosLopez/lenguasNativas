import React from 'react';
import Image from 'next/image';
import imagenPresentacion from '../../../public/image/nuevaEsmeralda.jpg';
import { Grid, Paper, styled, Typography } from '@mui/material';
import CardSubMenu from '../../components/cardSubMenu.js';
import presentacion from '../../../public/image/presentacion.jpg';
import saberes from '../../../public/image/saberes.jpg';
import SubMenu from '../../components/SubMenu';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  lineHeight: '30px',
  fontSize: '1.3rem',
  padding: '1rem 2rem 0 2rem',
  textAlign: 'justify',
}));

const Institucional = () => {
  return (
    <div>
      <Grid container sx={{ display: 'flex', marginTop: '50px', padding: '0 8rem 0 8rem' }}>
        <Grid item xs={12} sx={{ marginBottom: '5rem' }}>
          <Image src={imagenPresentacion} alt="Imagen presentación" height={1200} />
        </Grid>
        <Grid container direction="row" justifyContent="space-around" alignItems="center" xs={12}>
          <CardSubMenu
            image={presentacion}
            title={'Presentación'}
            body={'El Taller Escuela para la Salvaguarda de la lengua bora llevado a cabo en la Comunidad Nueva Esmeralda, bajo la coordinación de la Escuela Taller de Boyacá,'}
          />
          <CardSubMenu
            image={saberes}
            title={'Contenido del taller escuela'}
            body={
              'La lengua píínemuna (o bora) es una de las veintiún familias lingüísticas nativas existentes en territorio colombiano. Landaburu la ubica en el grupo de lenguas de “proyección regional” en Sudamérica'
            }
          />
        </Grid>
        <Grid item xs={8} sx={{ padding: '1rem' }}>
          <Item>
            <Typography variant="h5" margin={3} align="center">
              Presentación
            </Typography>
            <Typography variant="p">
              El Taller Escuela para la Salvaguarda de la lengua bora llevado a cabo en la Comunidad Nueva Esmeralda, bajo la coordinación de la Escuela Taller de Boyacá, tuvo como objetivo
              salvaguardar y transmitir conocimientos en torno a la maloca o baaja y la chagra o umihe mediante la enseñanza de la lengua píínemuna (bora), y fue realizado durante los meses de
              diciembre de 2021 y abril de 2022. La comunidad de Nueva Esmeralda se ubica a orillas del curso inferior del río Igaraparaná, en territorio del resguardo llamado Predio Putumayo.
              Administrativamente, esta comunidad está en la jurisdicción del municipio de Puerto Arica, Departamento de Amazonas, municipio asentado cerca de la desembocadura del río Igaraparaná en
              el Putumayo. De acuerdo con el testimonio del abuelo Luis Rimabake, la maloca de la comunidad de Nueva Esmeralda fue fundada hace unos veinte años, cuando él decidió continuar con la
              tradición heredada de su padre luego de su muerte. La comunidad está formada por un pequeño grupo de familias ligadas por vínculos de parentesco. Estas familias viven en residencias
              articuladas alrededor de la maloca dirigida por el abuelo Rimabake, en cuyo mambeadero se reúnen los miembros masculinos del poblado. El sustento de la comunidad todavía depende en gran
              medida del cultivo de la chagra, de la pesca y de la caza de animales silvestres. En la comunidad también hay una escuela de educación básica primaria, en donde los niños del poblado
              pueden cursar hasta el grado quinto. En esta comunidad se diseñó y ofertó un Taller Escuela que contempló sesiones de transmisión de historias y de conocimientos tradicionales sobre la
              lengua píínemuna, mediante la enseñanza acerca de oficios ligados a la maloca o baaja y la chagra o umihe. Estas sesiones fueron lideradas por la maestra-sabedora Balvina Yacob Imis,
              hablante de píínemuna desde su niñez. La metodología de estas sesiones de trabajo se ha fundado en el principio "Aprender haciendo". Por eso, antes de iniciar propiamente las actividades
              formativas, se adelantó también una “minga” para reparar el techo de la maloca, en la cual participaron los miembros masculinos de la comunidad, jóvenes y adultos. Luego, se estudió
              detalladamente el alfabeto para identificar las particularidades fonológicas de lengua píínemuna, haciendo énfasis en ejercicios de pronunciación. Y, en tercer lugar, se abordaron los
              conocimientos ligados a los oficios de la maloca y de la chagra, que siempre iban acompañados de actividades prácticas, de visitas y observaciones guiadas, y de ejercicios de
              investigación con sabedores tradicionales. Se había previsto trabajar además con cantos tradicionales en lengua píínemuna, pero el límite de tiempo impidió llegar a este núcleo de
              formación. Saberes y oficios abordados en el Taller Escuela La lengua píínemuna (o bora) es una de las veintiún familias lingüísticas nativas existentes en territorio colombiano.
              Landaburu la ubica en el grupo de lenguas de “proyección regional” en Sudamérica, junto con las familias uitoto (con la que ha sido emparentada por algunos lingüistas), tukano,
              macú-puinave, sáliva-piaroa, guahibo, chocó y barbacoa (Landaburu, 2004-5, p. 7). El pueblo píínemuna hace parte de un complejo cultural llamado “Gente de Centro”, al lado de los pueblos
              múrui, miraña (lengua esta última con la que tiene múltiples semejanzas), muinane, andoque, ocaina y tanimuka. Según un documento de la Dirección de Poblaciones del año 2005, más del 90
              % del pueblo píínemuna reside en el departamento de Amazonas, principalmente en las márgenes del río Putumayo y de uno de sus afluentes principales, el río Igaraparaná. Actualmente, el
              pueblo píínemuna ocupa un amplio territorio, llamado Predio Putumayo. Este les fue entregado en 1988 como medida de reparación por las injusticias históricas sufridas a manos de las Casa
              Arana primero y de los colonos y diversos grupos armados que llegaron a ese territorio a lo largo del siglo XX. En lo que respecta al taller escuela adelantado en la Comunidad Nueva
              Esmeralda, no se centró en un único oficio, sino en varios oficios complementarios, todos relacionados con el espacio articulador de la cultura píínemuna, la maloca. En primer lugar, se
              abordó el oficio de tejer techo de maloca, un saber en esencia masculino. Este saber hace parte de un oficio más general: el oficio de la cestería, imprescindible en el repertorio de
              saberes (o “canasto”) de un hombre píínemuna bien formado. Aprovechando este conocimiento de los sabedores de la comunidad en la confección de techos de palmas de caraná, se hicieron
              entonces reparaciones de la maloca que permitieron adecuarla como espacio de formación o eemuja. Un segundo saber-oficio reivindicado durante este taller escuela fue el oficio de sembrar
              y de cuidar la chagra o umihe. Este oficio es central en el contexto de la cultura del pueblo píínemuna. La umihe o chagra es un espacio vinculado al género femenino, donde la mujer
              siembra plantas con las que se identifica prototípicamente (la pajkyomu o yuca dulce, el dihou o ají, la majtsaka o maní). Los píínemuna comparan a la mujer especialmente con la pajkyomu
              o “yuca dulce”. La razón de esta comparación radica en el hecho de que, mediante el procesamiento de esta planta, ella prepara bebidas como la kagunuko o caguana (una bebida hecha a base
              del almidón de la yuca dulce) o como la manicuera (una especie de caldo espeso hecho con la yuca hervida) que tienen como fin principal “enfriar” la “rabia” y el “calor” que los hombres
              absorben de sustancias consideradas “calientes” como la ipi o coca o como el bañe o pasta de tabaco (ambil). El oficio de sembrar la chagra se abordó en diversas sesiones por medio del
              estudio de la terminología asociada con este espacio. En este sentido, se describieron los diversos procesos que allí se llevan a cabo, las semillas y frutos que se producen, y las
              herramientas empleadas para su transformación. Un tercer grupo de oficios abordados durante el Taller escuela fue el de los que se realizan con objetos o utensilios de la maloca. Se
              abordaron los nombres e historias tradicionales de esos objetos. Este enfoque en la terminología y los significados culturales asociados con los elementos y utensilios de la maloca ha
              permitido mostrar que los dos oficios estudiados en los dos primeros núcleos: el oficio de tejer techo y el de sembrar chagra, son requisitos necesarios para poder sentarse en una
              maloca, esto es, para poder constituir la entidad social, política y ritual que articula la cultura del pueblo píínemuna como un todo. Dicho en pocas palabras, la maloca es expresión de
              la autonomía de un hombre y de una mujer (en este caso, del abuelo Luis Rimabake y de la abuela Balvina Yacobs) que se unen para hacer prosperar y reproducir un núcleo familiar. Con
              todo, para que esta unión pueda llegar a su fin, tanto el hombre como la mujer deben saber llevar a cabo, entre muchos otros, los oficios abordados a lo largo del taller escuela. En
              primer lugar, la mujer debe cultivar un espacio de la selva previamente desmontado por los hombres, llamado chagra, el cual simboliza el género femenino a través de plantas y substancias
              como la pajkyomu o yuca dulce o la kagunuko o caguana. Y segundo, el hombre debe saber tejer el techo de una maloca y, de manera general, debe ser conocedor del oficio de la cestería,
              oficio imprescindible en el repertorio general de saberes (o “canasto”) de un hombre bien formado. Finalmente, como los píínemuna dan un valor especial a los cantos y a las fiestas
              rituales en que los ejecutan, en la fase de diseño del plan de formación de este taller escuela se había previsto abordar el oficio de cantor, que resulta muy relevante desde el punto de
              vista cultural puesto que es un medio de socialización de la Gente de Centro. Se había proyectado el aprendizaje de algunos cantos de las fiestas Bahja y apújko, de cantos de arrullo, de
              trabalenguas y de otras formas verbales típicas de la lengua y la cultura píínemuna, pero el límite de tiempo impidió llegar hasta este núcleo de formación, como quedó asentado en el
              acta de finalización del taller escuela levantada por la propia comunidad.
            </Typography>
          </Item>
          <Item>
            <Typography variant="h5" margin={3} align="center">
              Saberes y oficios abordados en el Taller Escuela
            </Typography>
            <Typography variant="p">
              La lengua píínemuna (o bora) es una de las veintiún familias lingüísticas nativas existentes en territorio colombiano. Landaburu la ubica en el grupo de lenguas de “proyección regional”
              en Sudamérica, junto con las familias uitoto (con la que ha sido emparentada por algunos lingüistas), tukano, macú-puinave, sáliva-piaroa, guahibo, chocó y barbacoa (Landaburu, 2004-5,
              p. 7). El pueblo píínemuna hace parte de un complejo cultural llamado “Gente de Centro”, al lado de los pueblos múrui, miraña (lengua esta última con la que tiene múltiples semejanzas),
              muinane, andoque, ocaina y tanimuka. Según un documento de la Dirección de Poblaciones del año 2005, más del 90 % del pueblo píínemuna reside en el departamento de Amazonas,
              principalmente en las márgenes del río Putumayo y de uno de sus afluentes principales, el río Igaraparaná. Actualmente, el pueblo píínemuna ocupa un amplio territorio, llamado Predio
              Putumayo. Este les fue entregado en 1988 como medida de reparación por las injusticias históricas sufridas a manos de las Casa Arana primero y de los colonos y diversos grupos armados
              que llegaron a ese territorio a lo largo del siglo XX. En lo que respecta al taller escuela adelantado en la Comunidad Nueva Esmeralda, no se centró en un único oficio, sino en varios
              oficios complementarios, todos relacionados con el espacio articulador de la cultura píínemuna, la maloca. En primer lugar, se abordó el oficio de tejer techo de maloca, un saber en
              esencia masculino. Este saber hace parte de un oficio más general: el oficio de la cestería, imprescindible en el repertorio de saberes (o “canasto”) de un hombre píínemuna bien formado.
              Aprovechando este conocimiento de los sabedores de la comunidad en la confección de techos de palmas de caraná, se hicieron entonces reparaciones de la maloca que permitieron adecuarla
              como espacio de formación o eemuja. Un segundo saber-oficio reivindicado durante este taller escuela fue el oficio de sembrar y de cuidar la chagra o umihe. Este oficio es central en el
              contexto de la cultura del pueblo píínemuna. La umihe o chagra es un espacio vinculado al género femenino, donde la mujer siembra plantas con las que se identifica prototípicamente (la
              pajkyomu o yuca dulce, el dihou o ají, la majtsaka o maní). Los píínemuna comparan a la mujer especialmente con la pajkyomu o “yuca dulce”. La razón de esta comparación radica en el
              hecho de que, mediante el procesamiento de esta planta, ella prepara bebidas como la kagunuko o caguana (una bebida hecha a base del almidón de la yuca dulce) o como la manicuera (una
              especie de caldo espeso hecho con la yuca hervida) que tienen como fin principal “enfriar” la “rabia” y el “calor” que los hombres absorben de sustancias consideradas “calientes” como la
              ipi o coca o como el bañe o pasta de tabaco (ambil). El oficio de sembrar la chagra se abordó en diversas sesiones por medio del estudio de la terminología asociada con este espacio. En
              este sentido, se describieron los diversos procesos que allí se llevan a cabo, las semillas y frutos que se producen, y las herramientas empleadas para su transformación. Un tercer grupo
              de oficios abordados durante el Taller escuela fue el de los que se realizan con objetos o utensilios de la maloca. Se abordaron los nombres e historias tradicionales de esos objetos.
              Este enfoque en la terminología y los significados culturales asociados con los elementos y utensilios de la maloca ha permitido mostrar que los dos oficios estudiados en los dos
              primeros núcleos: el oficio de tejer techo y el de sembrar chagra, son requisitos necesarios para poder sentarse en una maloca, esto es, para poder constituir la entidad social, política
              y ritual que articula la cultura del pueblo píínemuna como un todo. Dicho en pocas palabras, la maloca es expresión de la autonomía de un hombre y de una mujer (en este caso, del abuelo
              Luis Rimabake y de la abuela Balvina Yacobs) que se unen para hacer prosperar y reproducir un núcleo familiar. Con todo, para que esta unión pueda llegar a su fin, tanto el hombre como
              la mujer deben saber llevar a cabo, entre muchos otros, los oficios abordados a lo largo del taller escuela. En primer lugar, la mujer debe cultivar un espacio de la selva previamente
              desmontado por los hombres, llamado chagra, el cual simboliza el género femenino a través de plantas y substancias como la pajkyomu o yuca dulce o la kagunuko o caguana. Y segundo, el
              hombre debe saber tejer el techo de una maloca y, de manera general, debe ser conocedor del oficio de la cestería, oficio imprescindible en el repertorio general de saberes (o “canasto”)
              de un hombre bien formado. Finalmente, como los píínemuna dan un valor especial a los cantos y a las fiestas rituales en que los ejecutan, en la fase de diseño del plan de formación de
              este taller escuela se había previsto abordar el oficio de cantor, que resulta muy relevante desde el punto de vista cultural puesto que es un medio de socialización de la Gente de
              Centro. Se había proyectado el aprendizaje de algunos cantos de las fiestas Bahja y apújko, de cantos de arrullo, de trabalenguas y de otras formas verbales típicas de la lengua y la
              cultura píínemuna, pero el límite de tiempo impidió llegar hasta este núcleo de formación, como quedó asentado en el acta de finalización del taller escuela levantada por la propia
              comunidad.
            </Typography>
          </Item>
          <Item>
            <Typography variant="h5" margin={3} align="center">
              Saberes y oficios abordados en el Taller Escuela
            </Typography>
            <Typography variant="p">
              La lengua píínemuna (o bora) es una de las veintiún familias lingüísticas nativas existentes en territorio colombiano. Landaburu la ubica en el grupo de lenguas de “proyección regional”
              en Sudamérica, junto con las familias uitoto (con la que ha sido emparentada por algunos lingüistas), tukano, macú-puinave, sáliva-piaroa, guahibo, chocó y barbacoa (Landaburu, 2004-5,
              p. 7). El pueblo píínemuna hace parte de un complejo cultural llamado “Gente de Centro”, al lado de los pueblos múrui, miraña (lengua esta última con la que tiene múltiples semejanzas),
              muinane, andoque, ocaina y tanimuka. Según un documento de la Dirección de Poblaciones del año 2005, más del 90 % del pueblo píínemuna reside en el departamento de Amazonas,
              principalmente en las márgenes del río Putumayo y de uno de sus afluentes principales, el río Igaraparaná. Actualmente, el pueblo píínemuna ocupa un amplio territorio, llamado Predio
              Putumayo. Este les fue entregado en 1988 como medida de reparación por las injusticias históricas sufridas a manos de las Casa Arana primero y de los colonos y diversos grupos armados
              que llegaron a ese territorio a lo largo del siglo XX. En lo que respecta al taller escuela adelantado en la Comunidad Nueva Esmeralda, no se centró en un único oficio, sino en varios
              oficios complementarios, todos relacionados con el espacio articulador de la cultura píínemuna, la maloca. En primer lugar, se abordó el oficio de tejer techo de maloca, un saber en
              esencia masculino. Este saber hace parte de un oficio más general: el oficio de la cestería, imprescindible en el repertorio de saberes (o “canasto”) de un hombre píínemuna bien formado.
              Aprovechando este conocimiento de los sabedores de la comunidad en la confección de techos de palmas de caraná, se hicieron entonces reparaciones de la maloca que permitieron adecuarla
              como espacio de formación o eemuja. Un segundo saber-oficio reivindicado durante este taller escuela fue el oficio de sembrar y de cuidar la chagra o umihe. Este oficio es central en el
              contexto de la cultura del pueblo píínemuna. La umihe o chagra es un espacio vinculado al género femenino, donde la mujer siembra plantas con las que se identifica prototípicamente (la
              pajkyomu o yuca dulce, el dihou o ají, la majtsaka o maní). Los píínemuna comparan a la mujer especialmente con la pajkyomu o “yuca dulce”. La razón de esta comparación radica en el
              hecho de que, mediante el procesamiento de esta planta, ella prepara bebidas como la kagunuko o caguana (una bebida hecha a base del almidón de la yuca dulce) o como la manicuera (una
              especie de caldo espeso hecho con la yuca hervida) que tienen como fin principal “enfriar” la “rabia” y el “calor” que los hombres absorben de sustancias consideradas “calientes” como la
              ipi o coca o como el bañe o pasta de tabaco (ambil). El oficio de sembrar la chagra se abordó en diversas sesiones por medio del estudio de la terminología asociada con este espacio. En
              este sentido, se describieron los diversos procesos que allí se llevan a cabo, las semillas y frutos que se producen, y las herramientas empleadas para su transformación. Un tercer grupo
              de oficios abordados durante el Taller escuela fue el de los que se realizan con objetos o utensilios de la maloca. Se abordaron los nombres e historias tradicionales de esos objetos.
              Este enfoque en la terminología y los significados culturales asociados con los elementos y utensilios de la maloca ha permitido mostrar que los dos oficios estudiados en los dos
              primeros núcleos: el oficio de tejer techo y el de sembrar chagra, son requisitos necesarios para poder sentarse en una maloca, esto es, para poder constituir la entidad social, política
              y ritual que articula la cultura del pueblo píínemuna como un todo. Dicho en pocas palabras, la maloca es expresión de la autonomía de un hombre y de una mujer (en este caso, del abuelo
              Luis Rimabake y de la abuela Balvina Yacobs) que se unen para hacer prosperar y reproducir un núcleo familiar. Con todo, para que esta unión pueda llegar a su fin, tanto el hombre como
              la mujer deben saber llevar a cabo, entre muchos otros, los oficios abordados a lo largo del taller escuela. En primer lugar, la mujer debe cultivar un espacio de la selva previamente
              desmontado por los hombres, llamado chagra, el cual simboliza el género femenino a través de plantas y substancias como la pajkyomu o yuca dulce o la kagunuko o caguana. Y segundo, el
              hombre debe saber tejer el techo de una maloca y, de manera general, debe ser conocedor del oficio de la cestería, oficio imprescindible en el repertorio general de saberes (o “canasto”)
              de un hombre bien formado. Finalmente, como los píínemuna dan un valor especial a los cantos y a las fiestas rituales en que los ejecutan, en la fase de diseño del plan de formación de
              este taller escuela se había previsto abordar el oficio de cantor, que resulta muy relevante desde el punto de vista cultural puesto que es un medio de socialización de la Gente de
              Centro. Se había proyectado el aprendizaje de algunos cantos de las fiestas Bahja y apújko, de cantos de arrullo, de trabalenguas y de otras formas verbales típicas de la lengua y la
              cultura píínemuna, pero el límite de tiempo impidió llegar hasta este núcleo de formación, como quedó asentado en el acta de finalización del taller escuela levantada por la propia
              comunidad.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4} sx={{ padding: '1rem' }}>
          <SubMenu />
        </Grid>
      </Grid>
    </div>
  );
};

export default Institucional;
