import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import firstSection from '../../assets/img/questions1.png'
import secondSection from '../../assets/img/questions2.png'

const Content = () => {
    return (
        <>
            <div className="bg-accent pt-4 pb-5">
                <Container>
                    <Row className="mt-3">
                        <Col sm lg="6" className="mt-5">
                            <ul>
                                <li>
                                    <h5 className="text-left text-dark font-weight-normal">
                                        ¿Cuáles son los hábitos que debería desarrollar un Ingeniero en Desarrollo de Sotware?
                                    </h5>
                                    <p className="text-dark font-weight-light">
                                        El hábito más importante es el <em className="font-weight-bold">autoaprendizaje</em> pero también debe de ir acompañado de un <em className="font-weight-bold">amplio criterio, comunicación e inteligncia emocional</em>.
                                    </p>
                                    <p className="text-dark">¿Por qué?</p>
                                    <p className="text-dark font-weight-light">Estar acompañado de este conjunto de hábitos siempre le ayudarán a no quedarse por detrás en su desarrollo profesional.</p>
                                </li>
                                <li>
                                    <h5 className="text-left text-dark font-weight-normal">
                                        ¿Cuál es el compromiso de un Ingeniero en Desarrollo de Sotware con la Ética de la Vida?
                                    </h5>
                                    <p className="text-dark font-weight-light">
                                        Crear software que resuelva los problemas y que sea íntegro, sin manipular los datos que se manejen internamente para ocupar esa información con fines maliciosos.
                                    </p>
                                </li>
                                <li>
                                    <h5 className="text-left text-dark font-weight-normal">
                                        ¿Aceptaría un trabajo que implique actuar de forma inmoral?
                                    </h5>
                                    <p className="text-dark font-weight-light">
                                        No
                                    </p>
                                    <p className="text-dark">¿Por qué?</p>
                                    <p className="text-dark font-weight-light">
                                        Involucrarse en actividades inmorales como Ingeniero de Software implica cometer delitos informáticos, penalizados con cárcel.
                                    </p>
                                </li>
                            </ul>
                        </Col>
                        <Col sm lg="6" className="mt-5">
                            <ul>
                                <li>
                                    <h5 className="text-left text-dark font-weight-normal">
                                        ¿Conviene solo ser un buen profesional dejando de lado ser buena persona?
                                    </h5>
                                    <p className="text-dark font-weight-light">
                                        No
                                    </p>
                                    <p className="text-dark">¿Por qué?</p>
                                    <p className="text-dark font-weight-light">Ninguna persona estaría balanceada si solo optimiza su rendimiento profesional, necesitamos de actividades que nos ayuden en nuestro desarrollo como persona.</p>
                                </li>
                                <li>
                                    <h5 className="text-left text-dark font-weight-normal">
                                        ¿Por qué cree que los profesionales en el Desarrollo de Software actúan de forma antiética?
                                    </h5>
                                    <p className="text-dark font-weight-light">
                                        Es muy probable que este tipo de comportamientos sea visto en consecuencia a una mala preparación, los programadores tenemos información muy delicada en nuestras manos la mayoría del tiempo, dependiendo de la preparación recibida se actuará de una u otra manera, en resumen este tipo de comportamiento se debe principalmente a la falta de preparación.
                                    </p>
                                </li>
                                <li>
                                    <h5 className="text-left text-dark font-weight-normal">
                                        ¿Está de acuerdo en que es necesario tener un sentido moral dela realidad profesional?
                                    </h5>
                                    <p className="text-dark font-weight-light">
                                        Sí, estoy de acuerdo
                                    </p>
                                    <p className="text-dark">¿Por qué?</p>
                                    <p className="text-dark font-weight-light">
                                        El tener un sentido moral en nuestro ámbito nos permite ser prudentes y actuar acorde a nuestra conciencia en una profesión que constantemente maneja información delicada.
                                    </p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Content
