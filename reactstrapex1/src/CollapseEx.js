import {useState} from 'react';
import { Collapse, UncontrolledCollapse, Button,CardBody,Card } from 'reactstrap';

const CollapseEx = () => {
    const [collapse, setCollapse] = useState(false);
    const toggle = () => {
        setCollapse(!collapse);
    }

    return (
        <div>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
            <Collapse isOpen={collapse}>
                <Card>
                    <CardBody>
                        Anim pariatur cliche reprehenderit,
                        enim eiusmod high life accusamus terry richardson ad squid. Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                    </CardBody>
                </Card>
            </Collapse>

            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>Toggle</Button>
            <UncontrolledCollapse toggler='#toggler'>
                <Card>
                    <CardBody>
                        Anim pariatur cliche reprehenderit,
                        enim eiusmod high life accusamus terry richardson ad squid. Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
        </div>
    )
}

export default CollapseEx;