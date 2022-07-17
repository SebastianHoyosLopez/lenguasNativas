import Image from 'next/image';
import imagenPresentacion from '../../public/image/portadaHome.png';
import { Box, Grid, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Box sx={{ padding: '0 3rem 0 3rem' }}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h2" align="center" mb={2}>
              Lenguas nativas
            </Typography>
            <div style={{ padding: '1rem 3rem 1rem 3rem', textAlign: 'justify' }}>
              <Typography variant="p" fontSize={18}>
                Esta página web es resultado de dos proyectos de revitalización lingüística realizados en el departamento de Amazonas, bajo la asesoría de la Escuela Taller de Boyacá y el apoyo de las
                direcciones de Poblaciones y de Patrimonio del Ministerio de Cultura. La página contiene informaciones recogidas entre los meses de diciembre de 2021 y abril de 2022 en dos lugares
                diferentes: en la Comunidad píínemuna (bora) de Nueva Esmeralda (localizada en el curso inferior del río Igaraparaná), y en el Cabildo de Pueblos Indígenas Unidos de Leticia, Capiul,
                cuyo carácter es multiétnico. El lector podrá encontrar aquí cantos de varios pueblos amazónicos con sus respectivos vocabularios; un resumen de los principales contenidos abordados
                durante los talleres de lenguas, e imágenes y videos alusivos a algunas manifestaciones culturales de las comunidades visitadas. El material fotográfico proviene del archivo de la
                investigadora Camila Sofía Venegas Osorio. La edición y selección de textos corrió a cargo del investigador Gustavo Zuluaga Hoyos.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Image src={imagenPresentacion} alt="Imagen presentación" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
