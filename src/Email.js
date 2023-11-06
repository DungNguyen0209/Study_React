import * as React from 'react';

var perf = require('./email.html');

const Email = () => {
   return <>
      <p
         style={{ margin: '0', fontSize: '14px' }}>
         <a href="{{ update_profile }}"
            title="Mise à jours des préférences"
            target="_blank"
            style={{ color: '#0092ff', fontWeight: 'bold', textDecoration: 'underline' }}>Mettre
            à jour mes
            préférences</a> | <a
               href="{{ unsubscribe }}"
               title="Désinscription"
               style={{ color: '#0092ff', fontWeight: 'bold', textDecoration: 'underline' }}>Se
            désinscrire</a>
      </p>
   </>;
}
export default Email