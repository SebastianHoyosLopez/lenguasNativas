import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import photoCapiul1 from '../../../public/image/museoVivoCapiul/photoCapiul1.png';
import photoCapiul2 from '../../../public/image/museoVivoCapiul/photoCapiul12.png';
import photoCapiul3 from '../../../public/image/museoVivoCapiul/photoCapiul13.png';
import photoCapiul4 from '../../../public/image/museoVivoCapiul/photoCapiul14.png';
import photoCapiul5 from '../../../public/image/museoVivoCapiul/photoCapiul15.png';
import photoCapiul6 from '../../../public/image/museoVivoCapiul/photoCapiul16.png';
import photoCapiul7 from '../../../public/image/museoVivoCapiul/photoCapiul17.png';
import photoCapiul8 from '../../../public/image/museoVivoCapiul/photoCapiul18.png';
import photoCapiul9 from '../../../public/image/museoVivoCapiul/photoCapiul19.png';
import photoCapiul10 from '../../../public/image/museoVivoCapiul/photoCapiul20.png';
import photoCapiul11 from '../../../public/image/museoVivoCapiul/photoCapiul21.png';
import photoCapiul12 from '../../../public/image/museoVivoCapiul/photoCapiul22.png';
import photoCapiul13 from '../../../public/image/museoVivoCapiul/photoCapiul23.png';
import photoCapiul14 from '../../../public/image/museoVivoCapiul/photoCapiul24.png';
import photoCapiul15 from '../../../public/image/museoVivoCapiul/photoCapiul25.png';
import photoCapiul16 from '../../../public/image/museoVivoCapiul/photoCapiul26.png';
import photoCapiul17 from '../../../public/image/museoVivoCapiul/photoCapiul27.png';
import photoCapiul18 from '../../../public/image/museoVivoCapiul/photoCapiul28.jpg';

export default function ImgMuseoVivo() {
  const router = useRouter();
  const id = router.query.id - 1 || null;
  console.log(id);
  return (
    <>
      {id !== null && (
        <>
          <Card sx={{ marginTop: '-5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <Image height={400} width={400} style={{ objectFit: 'cover' }} src={itemDataCapiul[id].img} alt="Imagen presentación" />
            </div>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h6" component="div">
                {itemDataCapiul[id].author}
              </Typography>
              <Typography variant="p" color="text.secondary" noWrap>
                {itemDataCapiul[id].title}
              </Typography>
            </CardContent>
            <Link href="/Cabildo_capiul">
              <Typography sx={{ cursor: 'pointer' }} align="center">
                Regresar
              </Typography>
            </Link>
          </Card>
        </>
      )}
    </>
  );
}

const itemDataCapiul = [
  {
    id: 1,
    img: photoCapiul1,
    title:
      'Woreküra: literalmente, “Corona de plumas”. La woreküra está elaborada con plumas de guacamayo adheridas a una tela de corteza de yanchama. Las figuras geométricas y pescados que la adornan simbolizan a Yoí, Ípi y Techi. La woreküra es el atuendo que distingue a la worekü, la joven festejada durante el baile de la pubertad.',
    author: 'Museo vivo Capiul',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id: 2,
    img: photoCapiul2,
    title:
      'Tutù: Instrumento de percusión hecho con cuero de animal y amarrado con fibras de chambira. El toque de este instrumento abre y cierra la fiesta de la pubertad. Con este se avisa que la celebración está siendo llevada a cabo. ',
    author: 'Museo vivo',
  },
  {
    id: 3,
    img: photoCapiul3,
    title:
      'Mawü - Nachinè: literalmente, “Alcanfor y rueda”. El atuendo está constituido por un traje que representa al enmascarado, dueño del árbol de alcanfor, y por una rueda que simboliza el universo. Tanto la rueda como el traje son de yanchama, y están pintados con tintes vegetales. Las figuras que más se usan como adornos de estos atuendos son las formas geométricas; motivos clánicos como el tigre, la garza o la guacamaya; y también algunas deidades ‘del territorio’ (naane).',
    author: 'Museo vivo',
  },
  {
    id: 4,
    img: photoCapiul4,
    title:
      'Mawü - Nachinè: literalmente, “Alcanfor y rueda”. El atuendo está constituido por un traje que representa al enmascarado, dueño del árbol de alcanfor, y por una rueda que simboliza el universo. Tanto la rueda como el traje son de yanchama, y están pintados con tintes vegetales. Las figuras que más se usan como adornos de estos atuendos son las formas geométricas; motivos clánicos como el tigre, la garza o la guacamaya; y también algunas deidades ‘del territorio’ (naane).',
    author: 'Museo vivo',
  },
  {
    id: 5,
    img: photoCapiul5,
    title:
      'Inarako o exprimidor. “Lo que se llama exprimidor” (ie mameki inarakona) es un “tejido de corteza de árbol de rastrojo” (inaragui jirife niga) de trenzado geométrico. Este tejido se emplea para “exprimir la masa de yuca húmeda” (mágai idúyena) y extraerle toda el agua. La harina de yuca ya deshidratada se utiliza luego “para preparar el cazabe” (taingo finoyena), indispensable para la realización de cualquier baile ritual (rafue).',
    author: 'Museo vivo',
  },
  {
    id: 6,
    img: photoCapiul6,
    title:
      'Ranita o cernidor. Es un tejido de ojo fino “confeccionado con fibras del árbol de guarumo” (ñotakai iofe niga finoka). Se emplea para “cernir la masa de yuca” (mágai izide), previamente exprimida con el matafrío o exprimidor (inarakodo iduika ie ja zaferede). Con la harina “cernida”, se forma la torta de cazabe, que se asa sobre un hornillo (taingo zoina zibemo).',
    author: 'Museo vivo',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id: 7,
    img: photoCapiul7,
    title:
      'Kirigai o canasto. Es un “tejido” (niga) de ojo ancho elaborado con la “fibra” (iofe) de la raíz del bejuco “yaré” (kirio). Sirve para cargar múltiples cosas: por ejemplo, los tallos de yuca (jugi) y las hojas de coca (jiibie) traídas de la chagra (jakafai); la masa de yuca (mágai) asada en el fogón (irai), etc. También se puede elaborar con fibras del árbol de guarumo (ñotakai), aunque su durabilidad es menor, o con fibras sintéticas más durables, como se hace actualmente. Desde el punto de vista espiritual, el kirigai o canasto simboliza el conocimiento (rafue onona kirigai). ',
    author: 'Museo vivo',
  },
  {
    id: 8,
    img: photoCapiul8,
    title:
      'Gwa’da’i o guayas. Instrumento musical tejido en fibras de chambira (nɨjɨpayʉ). Está compuesto de varias ristras de semillas de bejuco (gwa’dajke). Al chocar entre sí, las ristras de semilla (gwa’dajɨ) producen un sonido que va marcando el ritmo de la danza del cantor (majtsimʉnaajpi) y de sus acompañantes. Dependiendo del tipo de baile, las gwa’da’iiñe van amarradas en las pantorrillas, o en varas portadas por los cantores. Desde el punto de vista espiritual, el conjunto de las semillas gwa’dajɨɨne representa la unidad y la armonía.',
    author: 'Museo vivo',
  },
  {
    id: 9,
    img: photoCapiul9,
    title:
      'Tajkoraba o trampa para roedores. Es una trampa que se hace específicamente para atrapar roedores como los ratones (lli’pe) o los tintines (ʉʉkʉme). La tajkoraba se construye sobre todo en las chagras (ʉmɨ’e) o en los rastrojos (jɨɨ’a), cerca del cultivo de yuca (pɨɨka) o de la cosecha de chontaduros (meeme). Como sebo se pueden colocar trozos de yuca, de chontaduro o de fruta.',
    author: 'Museo vivo',
  },
  {
    id: 10,
    img: photoCapiul10,
    title:
      'Paykeejʉgwa o trampa para peces. Es una clase de trampa para capturar pescado (amoobe). Su tamaño depende del pescado que se quiera capturar. Hay paykeejʉgwa para capturar sardinas, en las que se colocan como carnada (tajʉta)  grillos (tseere’e), gusanos (nʉ’nei) o frutas (neeva). Hay otras paykeejʉgwa grandes, que se ubican en diferentes puntos de las quebradas. Estas no llevan carnadas, y se usan en combinación con el barbasco (mʉjkʉri) o con la construcción de cercas (katsijogwa) de corteza de árboles (mɨɨ’oba) o de chontas (ɨɨkajɨ). Las paykeejʉgwa pequeñas se tejen con chontas (igwajyʉ); las medianas, con fibra de palma de “marija” (gwaatsɨrɨba), y las grandes con varas pequeñas (piijʉko).',
    author: 'Museo vivo',
  },
  {
    id: 11,
    img: photoCapiul11,
    title:
      'Paykeejʉgwa o trampa para peces. Es una clase de trampa para capturar pescado (amoobe). Su tamaño depende del pescado que se quiera capturar. Hay paykeejʉgwa para capturar sardinas, en las que se colocan como carnada (tajʉta)  grillos (tseere’e), gusanos (nʉ’nei) o frutas (neeva). Hay otras paykeejʉgwa grandes, que se ubican en diferentes puntos de las quebradas. Estas no llevan carnadas, y se usan en combinación con el barbasco (mʉjkʉri) o con la construcción de cercas (katsijogwa) de corteza de árboles (mɨɨ’oba) o de chontas (ɨɨkajɨ). Las paykeejʉgwa pequeñas se tejen con chontas (igwajyʉ); las medianas, con fibra de palma de “marija” (gwaatsɨrɨba), y las grandes con varas pequeñas (piijʉko).',
    author: 'Museo vivo',
  },
  {
    id: 12,
    img: photoCapiul12,
    title:
      'Jetapa lauchurako o “banca-pensador”. En lengua kamejeya, se llama jetapa lauchurako a la “banca-pensador” típica de los hombres. Esta se emplea para pensar, para curar y para aprender, pues desde ahí se narra y se transmite el conocimiento. Para los pueblos kamejeya, la jetapa lauchurako simboliza la cara. De ahí su nombre, jetapa, relacionado con jetapajîmari, que quiere decir “cara de nosotros”. ',
    author: 'Museo vivo',
  },
  {
    id: 13,
    img: photoCapiul13,
    title:
      'Jetapa purunape o “banca de mujer”. La “banca de mujer” o jetapa purunape está relacionada con los oficios propios del espacio típico de las mujeres, el fogón o cocina. En este sentido, la jetapa purunape es un símbolo de labores tan esenciales dentro de toda maloca como rallar yuca o tostar cazabe.',
    author: 'Museo vivo',
  },
  {
    id: 14,
    img: photoCapiul14,
    title:
      'Umiyiripuku o janea. Por su forma, la umiyiripuku o janea simboliza los espacios de arriba, del medio y de abajo, o también la palma de la mano del padre creador. Por eso, cuando el médico tradicional realiza curaciones o conjuros, coloca en su interior una totuma (akurú) con brea, ají o cualquier otra planta o sustancia medicinal. La umiyiripuku no es para sentarse; es un elemento indispensable de la maloca, de la jefatura, de los curanderos y de los cantores.',
    author: 'Museo vivo',
  },
  {
    id: 15,
    img: photoCapiul15,
    title:
      'Walakuakuna u olla de barro. Hecha con barro curado sobre fuego, la walakuakuna sirve para preparar y almacenar diversos alimentos, entre ellos el caldo de tucupí. Como elemento típico de la cocina, la walakuakuna se puede poner sobre una janea femenina, al lado de instrumentos como la “piedra de rallar” (jipa).',
    author: 'Museo vivo',
  },
  {
    id: 16,
    img: photoCapiul16,
    title: 'Vista exterior de la maloca: puerta principal y sendero de acceso. ',
    author: 'Museo vivo',
  },
  {
    id: 17,
    img: photoCapiul17,
    title: 'Vista del fogón y del espacio para preparar los alimentos. ',
    author: 'Museo vivo',
  },
  {
    id: 18,
    img: photoCapiul18,
    title: 'Vista del mambeadero de la maloca durante el ritual de armonización con que se iniciaron las actividades del Taller-Escuela.  ',
    author: 'Museo vivo',
  },
];
