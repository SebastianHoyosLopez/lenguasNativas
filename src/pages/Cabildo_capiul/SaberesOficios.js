import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import image from '../../../public/image/saberesCapiul.jpg';

const SaberesOficios = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ padding: '0 8px 0 8px' }}>
      <Grid>
        <Image src={image} alt="niño nueva esmeralda" />
      </Grid>
      <Grid sx={{ padding: '3rem', textAlign: 'justify' }}>
        <Typography variant="p" fontSize={25}>
          <p>
            La población miembro de CAPIUL se reconoce como perteneciente a 26 grupos étnicos, de al menos diez familias lingüísticas diferentes. Al interior del cabildo se reconocieron tres grandes
            conglomerados socioculturales que reúnen en su mayoría esta gran cantidad de grupos étnicos: 1. gente de agua; 2. gente de centro y; 3. gente de yuruparí. Reafirmando el carácter
            multiétnico de CAPIUL, el cabildo busca que estos tres grandes conjuntos culturales tengan participación y representación en proyectos que, como este, procuran el fortalecimiento de los
            saberes tradicionales. Por este motivo se han seleccionado cuatro lenguas o pueblos: 1. yukuna; 2. miraña; 3. murui y; 4. tikuna. Estos son algunos de los grupos étnicos con mayor
            población en el cabildo: Un 23% de la población de CAPIUL es tikuna, un 17% es múrui, un 6% es miraña y un 3% es yukuna.Como lenguas de gente de centro están el miraña y el murui. La
            lengua miraña es una lengua perteneciente a la familia Bora, junto con las lenguas muinane y el bora. El múrui pertenece a la familia linguistica Uitoto, junto con el okaina. Como lengua
            de gente de yuruparí está el yukuna. La lengua yukuna es una lengua perteneciente a la familia Arawak, junto con la lengua kurripako. Como lengua de la gente de agua está el tikuna. La
            lengua tikuna es una lengua aislada.
          </p>

          <p>
            De la población tikuna de CAPIUL sólo el 10% tiene la lengua tikuna como primera lengua, un 6% la entiende y un 84% no la entiende. De la población murui-muina un 20% tiene el murui como
            primera lengua, un 7% la entiende y el 73% de los murui no la habla ni la entiende. De la población miraña el 24% tiene el miraña como lengua materna, el 10% la entiende y el 66% no la
            habla ni la entiende. En el caso de los yukuna, el 38% tiene el yukuna como primera lengua, un 31% la entiende y un 31% no la entiende. Este Taller Escuela en lenguas maternas a partir de
            cantos y bailes hace parte de un componente estratégico clave para la revalorización, uso y mantenimiento de las lenguas indígenas y sus prácticas asociadas.
          </p>

          <p>
            El oficio de cantor, para las comunidades del noroeste amazónico y de la triple frontera, los espacios geográficos en los que se sitúan los pueblos cuyas lenguas están siendo abordadas en
            el taller tikuna, múrui, yukuna y miraña, es una de las funciones de más dignidad social y cultural. [Entre los múrui, por ejemplo, existe el concepto de &quot;carrera ritual&quot;,
            llamada rafue en su lengua, un oficio que desempeña un sabedor durante gran parte de su vida con ayuda de los llamados aliados rituales]. La formación en el oficio de cantor implica no
            sólo el conocimiento de los cantos rituales que se ejecutan durante las fiestas rituales, sino también el dominio de otras técnicas y saberes cestería, pintura corporal, danza, etc.. El
            oficio de cantor es relevante hoy en el contexto multiétnico y urbano de Leticia porque, en ausencia de las condiciones de vida propias de tiempos más antiguos, los bailes rituales se han
            convertido en uno de los principales marcadores de identidad y tradicionalidad.
          </p>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default SaberesOficios;
