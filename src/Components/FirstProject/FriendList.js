
import React from 'react'

const FirstProjectMain = ({
    image,
    name,
    job,
    children
}) => {
    return (
        <React.Fragment>
        <div className="container">
            <div className="row">
            <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" src={image} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text text-center">{name}</p>
                            <p className="card-text text-center">{job}</p>
                            {children}
                        </div>
                    </div>
                </div>
                <div className="col-sm-4"></div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default FirstProjectMain
