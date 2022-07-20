import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import image from '../../../public/image/museoVivoCapiul/photoCapiul1.png';

const Contenido = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ padding: '0 8px 0 8px' }}>
      <Grid>
        <Image src={image} alt="niño nueva esmeralda" height={500} width={700} />
      </Grid>
      <Grid sx={{ padding: '3rem', textAlign: 'justify' }}>
        <Typography variant="p" fontSize={25}>
          <p>
            <div>
              <div>
                <span>CONTENIDO DEL TALLER ESCUELA CABILDO CAPIUL</span>
              </div>
              <br />
              <div>
                <p>
                  El proceso de formaci&oacute;n cont&oacute; con una duraci&oacute;n de 24 sesiones 120 horas en total y una sesi&oacute;n adicional de cierre. Las sesiones se realizaron los
                  d&iacute;as s&aacute;bado jornada ma&ntilde;ana y tarde, 6 horas y domingo jornada ma&ntilde;ana, 4 horas. Se ofertaron cuatro m&oacute;dulos: 1. tikuna; 2. m&uacute;rui; 3.
                  mira&ntilde;a y; 4. yucuna. Cada uno de los n&uacute; cleos tuvo una dedicaci&oacute;n de seis sesiones 30 horas en total, durante tres fines de semana continuos. Se realiz&oacute;
                  la convocatoria a trav&eacute;s del gestor cultural de 15 aprendices miembros del cabildo. Se reasignaron los cupos de los aprendices que desertaron al proceso. Lograron culminar y
                  certificar satisfactoriamente la formaci&oacute;n del taller escuela un total de 14 aprendices. A continuaci&oacute;n, se presenta cuadro compilado de asistencia y seguimiento al
                  proceso de formaci&oacute;n de los aprendices:
                </p>
              </div>
              <ol>
                <li>
                  <p>Apertura del proceso de formaci&oacute;n</p>
                </li>
              </ol>
              <p>
                El encuentro de este d&iacute;a, el primero del taller-escuela en lenguas vern&aacute;culas proyectado en Capiul, inicia con un ritual de armonizaci&oacute;n a cargo del
                maestro-formador Crist&oacute;bal Farirama, maestro del n&uacute;cleo de lengua m&uacute;rui. El breve ritual m&uacute;rui, llamado tambi&eacute;n &ldquo;mezcla de ambil&rdquo;,
                consiste en mezclar la pasta de tabaco extra&iacute;da de las hojas hervidas de esta planta, con las sales vegetales sacadas de diversas especies de &aacute;rboles del monte (diversas
                especies de bejucos, entre otros). Seg&uacute;n el abuelo Farirama, con este ritual se busca curar la inteligencia y la comprensi&oacute;n de los aprendices, a fin de que los
                conocimientos y saberes derivados de este taller se asienten en sus corazones. De igual modo, este ritual de mezcla del tabaco con la sal vegetal representa la unidad del grupo y de
                los individuos que lo componen: as&iacute; como la pasta de tabaco y las sales se integran hasta formar una unidad, asimismo los aprendices deber&aacute;n estar unidos por un mismo
                pensamiento. &nbsp; &nbsp;
              </p>

              <p>
                Esta parte del encuentro concluye con la presentaci&oacute;n de los maestros-sabedores y de los profesionales de la Escuela taller de Boyac&aacute;. &Aacute;ngel Tanimuka, Gestor
                cultural del proyecto y vicegobernador de Cabildo de Pueblos Ind&iacute;genas Unidos de Leticia (CAPIUL), insiste en la importancia de las sustancias rituales para el adecuado
                desarrollo del Taller-escuela, pues sin ellas, afirma, &ldquo;es imposible adquirir ning&uacute;n conocimiento&rdquo;, e invita a los aprendices a cumplir responsablemente con las
                obligaciones acad&eacute;micas adquiridas. El abuelo Farirama, por otra parte, manifiesta su disposici&oacute;n a resolver todas las dudas y preguntas de los aprendices. Y Abel Santos,
                maestro del n&uacute;cleo de lengua mag&uuml;ta, se&ntilde;ala que la apertura tradicional por medio de la mezcla de ambil es una expresi&oacute;n de la forma en que las culturas
                ind&iacute; genas de la regi&oacute;n amaz&oacute;nica entienden e interpretan el territorio, as&iacute; el ambil no sea una sustancia propia del pueblo tikuna.
              </p>
              <p>
                En lo que respecta a los representantes de la ETB, Carolina Mari&ntilde;o, enviada de la Escuela Taller de Boyac&aacute;, hace una presentaci&oacute;n detallada de los or&iacute;genes
                y de las funciones de la ETB dentro del proyecto. Camila Sof&iacute;a Venegas, coordinadora, se refiere al plan de formaci&oacute;n que seguir&aacute; el taller. Y Gustavo Zuluaga
                Hoyos, profesional en ling&uuml;&iacute;stica y museos vivos, explica que ser&aacute; el encargado de hacer el registro escrito de los temas abordados en los talleres-escuela, al
                tiempo que asesorar&aacute; la puesta en marcha del Museo Vivo de CAPIUL. Concluidas estas intervenciones introductorias, se da inicio propiamente hablando al curso de lengua
                mag&uuml;ta, orientado por el profesor Abel.&nbsp;
              </p>
            </div>
          </p>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Contenido;
