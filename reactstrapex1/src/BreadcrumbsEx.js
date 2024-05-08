import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const BreadCrumbsEx = () => {
    return (
        <div>
        <Breadcrumb tag="nav">
            <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
            <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
        </Breadcrumb>
        </div>
    )
}

export default BreadCrumbsEx;