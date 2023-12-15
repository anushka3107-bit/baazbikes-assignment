import React from 'react'

const BikeDetails = ({details}) => {
  return (
    <>
    {
        details.map((detail)=>{
            const {id, imei , owner, soc} = detail;

            return(
                <tr>
                    <td>{id}</td>
                    <td>{imei}</td>
                    <td>{owner}</td>
                    <td>{soc}</td>
                </tr>
            )
        })
    }

    </>
  )
}

export default BikeDetails