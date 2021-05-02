import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import devOne from '../../assets/img/gooddev.png'
import devTwo from '../../assets/img/baddev.png'
import description from '../../assets/img/description.png'
import infografia from '../../assets/img/infografia.png'

const Content = () => {
    return (
        <>
            <div className="bg-variant mt-5 pt-5 pb-5">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col sm lg="6">
                            <h2 className="font-weight-normal text-center">
                                Plantear dos casos hipotéticos de un Ingeniero en Desarrollo de Software en los que se observe:
                            </h2>
                            <h5 className="text-dark text-center font-weight-light">Un acto humano bueno, un acto humano malo</h5>
                        </Col>
                    </Row>

                </Container>

            </div>

            <Container id="caso1" className="mt-5">
                <Row className="justify-content-around align-items-center">
                    <Col sm lg="5" className="mt-5">
                        <Image src={devOne} rounded fluid className="shadow-lg" />
                    </Col>
                    <Col sm lg="5" className="mt-5">
                        <h3 className="text-dark text-center text-lg-right">Un acto bueno</h3>
                        <p className="mt-4 text-dark text-center text-lg-right">
                            Hablemos del Ingeniero de Software Panchito, él ha sido ascendido a supervisor del equipo de desarrollo gracias a su liderazgo y alto desempeño dentro de la empresa, entonces su amigo Pedro le ha solicitado ayuda con un fragmento de código que le está dando error, Panchito con gusto aparta un poco de su tiempo para ayudar en específico a su compañero de trabajo y así implementar la nueva funcionalidad del producto.
                        </p>
                        <p className="text-dark text-center text-lg-right">
                            El <em className="font-weight-bold">fin</em> de esta acción fue implementar la nueva funcionalidad del producto, el <em className="font-weight-bold">objeto</em> de esta acción fue resolver el problema que Pedro tenía, las <em className="font-weight-bold">circunstancias</em> fueron la dificultad de resolver el problema y el corto tiempo para entregar la nueva funcionalidad.
                        </p>
                        <p className="text-dark text-center text-lg-right">En conclusión es un acto humano bueno debido a la actuación que tuvo el supervisor con sus empleados.</p>
                    </Col>
                </Row>
            </Container>
            <div id="caso2" className="bg-accent">
                <Container className="mt-5 pt-5 pb-5">
                    <Row className="justify-content-around align-items-center">
                        <Col sm lg="5" className="mt-5">
                            <h3 className="text-dark text-center text-lg-left">Un acto malo</h3>
                            <p className="mt-4 text-dark text-center text-lg-left">
                                Hablemos ahora acerca de Godofredo un jefe de operaciones en una importante empresa de software el cual tiene como subempleados a Juan y a Pedro quienes son desarrolladores a tiempo completo por más de 10 años en la empresa. Un día cuando se presentaba una nueva funcionalidad del sitio web de la empresa, éste falló debido a que Juan había olvidado mandar sus cambios en el código del sitio web. La acción de Godofredo fue despedirlo inmediatamente sin pedir explicaciones de sus acciones.
                            </p>
                            <p className="text-dark text-center text-lg-left">
                                En esta ocasión el <em className="font-weight-bold">fin</em> de este acto fue presentar una nueva funcionalidad en el sitio de la empresa, el <em className="font-weight-bold">objeto</em> de la acción fue el despido del subempleado de la empresa y las <em className="font-weight-bold">circunstancias</em> fue el hecho de no enviar los cambios necesarios para la nueva funcionalidad del sitio web.
                            </p>
                            <p className="text-dark text-center text-lg-left">En conclusión es un acto humano malo ya que en esta ocasión se pudo haber hablado con el empleado para poder entender la situación y servir de ayuda en vez de realizar un despido injustificado.</p>
                        </Col>
                        <Col sm lg="5" className="mt-5">
                            <Image src={devTwo} rounded fluid className="shadow-lg" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="mt-5 pt-5 pb-5">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col sm lg="6">
                            <h2 className="font-weight-normal text-center">
                                Describir las implicaciones de la conciencia moral que llevan al Ingeniero en Desarrollo de Software a actuar de determinada manera.
                            </h2>
                            <h5 className="text-dark text-center font-weight-light">Ejemplos con relación a los casos expuestos anteriormente</h5>
                        </Col>
                    </Row>
                    <Row className="justify-content-around align-items-center pt-5 pb-5">
                        <Col sm lg="4" className="mt-5">
                            <Image src={description} rounded fluid className="shadow-lg" />
                        </Col>
                        <Col sm lg="6" className="mt-5">
                            <p className="text-dark text-center text-lg-right">
                                En el <a href="#caso1">Caso 1</a> hemos observado que las acciones del ingeniero de software van acorde a una conciencia moral correcta y bien formada, su intención de estar siempre disponible para ayudar permitieron resolver el problema sin ninguna discusión de por medio.
                            </p>
                            <p className="text-dark text-center text-lg-right">
                                En el <a href="#caso2">Caso2</a> se manifestó una conciencia moral mal formada atendiendo más sus malos principio procediendo a hacer acciones que no corresponden a las de un líder de desarrollo.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-accent pt-5 pb-5">
                <Container className="mt-5">
                    <Row className="justify-content-center align-items-center">
                        <Col sm lg="6">
                            <h2 className="font-weight-normal text-center">
                                Leyes de El Salvador que todo Ingeniero en Desarrollo de Software debería de conocer.
                            </h2>
                            <h5 className="text-dark text-center font-weight-light">
                                Describir brevemente en qué consiste la ley y la razón por la que obliga su cumplimiento
                            </h5>
                        </Col>
                    </Row>
                    <Row className="justify-content-around align-items-center mt-5">
                        <h5 className="text-dark text-center text-lg-left mt-5">
                            LEY ESPECIAL CONTRA LOS DELITOS INFORMÁTICOS Y CONEXOS
                        </h5>
                        <Col sm lg="6" className="mt-5">
                            <p className="mt-4 font-weight-bold text-dark text-center text-lg-left">
                                Acceso Indebido a Sistemas Informáticos
                            </p>
                            <p className="text-dark text-center text-lg-left">
                                <em>Art. 4.</em>- El que intencionalmente y sin autorización o excediendo la que se le hubiere concedido, acceda, intercepte o utilice parcial o totalmente un sistema informático que utilice las Tecnologías de la Información o la Comunicación, será sancionado con prisión de uno a cuatro años.
                            </p>
                            <em className="text-dark text-center text-lg-left">
                                Algunos vacíos:
                            </em>
                            <ul className="mt-3">
                                <li>Debería de especificarse la sanción para aquellos que solo entraron</li>
                                <li>Debería de especificarse la sanción para aquellos que robaron algún dato</li>
                            </ul>
                        </Col>
                        <Col sm lg="6" className="mt-5">
                            <p className="mt-4 font-weight-bold text-dark text-center text-lg-left">
                                Espionaje informático
                            </p>
                            <p className="text-dark text-center text-lg-left">
                                <em>Art. 12.</em>- El que con fines indebidos obtenga datos, información reservada o confidencial contenidas en un sistema que utilice las Tecnologías de la Información y la Comunicación o en cualquiera de sus componentes, será sancionado con prisión de cinco a ocho años.
                            </p>
                            <em className="text-dark text-center text-lg-left">
                                Algunos vacíos:
                            </em>
                            <ul className="mt-3">
                                <li>Debería de haber una sanción para aquellos que robaron algún dato</li>
                                <li>Debería de haber una sanción para aquellos que publiquen información delicada</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="mt-5">
                <h2 className="font-weight-normal text-center">
                    Infografía
                </h2>
                <h4 className="font-weight-light text-center">
                    Describir el perfil personal de un Ingeniero en Desarrollo Software y 8 virtudes convenientes para que el profesional adquiera.
                </h4>
                <div className="justify-content-center d-flex mt-5">
                    <Image fluid rounded className="shadow-lg" src={infografia} />
                </div>
            </Container>
        </>
    )
}

export default Content
