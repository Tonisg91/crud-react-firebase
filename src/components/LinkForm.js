import React from 'react'

export default function LinkForm() {
    return (
        <form className="card card-body">
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input type="text" className="form-control" placeholder="https://someurl.com" name="url"/>
            </div>
        </form>
    )
}
