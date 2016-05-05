import React from 'react'

class AdTable extends React.Component {
  render () {
    this.props.ads
    const tbody = this.props.ads.map( (ad) => {
      const icon = ad.paused ?
        "glyphicon-ok text-success" : "glyphicon-remove text-muted";
      return (
        <tr key={ad.id}>
          <td>{ad.id}</td>
          <td>{ad.type}</td>
          <td>{ad.creationDate}</td>
          <td>{ad.name}</td>
          <td>
            <span className={icon + " glyphicon"}></span>
          </td>
        </tr>
      )
    })

    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <td>ID</td>
              <td>Type</td>
              <td>Creation Date</td>
              <td>Name</td>
              <td>Active</td>
            </tr>
          </thead>
          <tbody>{tbody}</tbody>
        </table>
      </div>
    );
  }

}

export default AdTable