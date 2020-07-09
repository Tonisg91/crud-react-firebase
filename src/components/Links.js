import React, { useEffect, useState } from 'react'
import LinkForm from './LinkForm';
import { toast } from 'react-toastify';

import {db} from '../firebase'

export default function Links() {

    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState('')

    const addOrEdit = async (linkObject) => {
        try {
            if (currentId) {
                await db.collection('links').doc(currentId).update(linkObject)
                toast('Link Updated Succesfully', {
                    type: 'info',
                    autoClose: 2500
                });
                setCurrentId('');
            } else {
                await db.collection('links').doc().set(linkObject)
                toast('New Link Added', {
                type: 'success',
                autoClose: 2500
            })
            }
        } catch (error) {
            console.error(error)
        }
    }

    const onDeleteLink = async (id) => {
        const userConfirm = window.confirm('Are you sure to want to delete this link?');
        if(userConfirm) {
            try {
                await db.collection('links').doc(id).delete();
                toast("Link Removed Succesfully", {
                    type: "error",
                    autoClose: 2500,
            });
            } catch (error) {
                console.error(error)
            }
        }
    }


    const getLinks = () => {
        db
        .collection('links')
        .onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({id: doc.id, ...doc.data()})
            });
            setLinks(docs);
        });
        
    }

    useEffect(() => {
        getLinks()
    }, [])

    return (
      <div>
        <div className="col-md-4 p-2">
          <LinkForm {...{addOrEdit, currentId, links}} />
        </div>
        <div className="col-md-8 p-2">
          {links.map((link) => (
            <div className="card mb-1" key={link.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h4>{link.name}</h4>
                  <div>
                    <i
                      className="material-icons text-danger"
                      onClick={() => onDeleteLink(link.id)}
                    >
                      close
                    </i>
                    <i className="material-icons" onClick={() => setCurrentId(link.id)}>create</i>
                  </div>
                </div>
                <p>{link.description}</p>
                <a href={link.url} rel="noopener noreferrer" target="_blank">
                  Go to Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
