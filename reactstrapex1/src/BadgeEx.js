import {Badge, Button} from 'reactstrap';

const BadgeEx = () => {
    return (
        <div>
            <Button color="primary" outline>
                Notifications <Badge color="primary">4</Badge>
            </Button>
            <Badge href="http://naver.com" pill color="success">success</Badge>
            <Badge color="secondary">secondary</Badge>
            <Badge color="danger">danger</Badge>
            <Badge color="warning">warning</Badge>
            <Badge color="info">info</Badge>
            <Badge color="light">light</Badge>
            <Badge color="dark">dark</Badge>

        </div>
    )
}

export default BadgeEx;