import React, { useState } from 'react';
import Invoice from './Invoice';

// Facture
export default function Invoices({parameters}) {

    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const [cols] = useState([
            { code: 'editionDate', label: "Date de l'émission de la facture" },
            { code: 'ref', label: "Numérotation de la facture" },
            { code: 'client', label: "Identité de l'acheteur" },
            { code: 'nature', label: "Désignation du produit ou de la prestation" },
            { code: 'ttc', label: "Somme totale à payer TTC" },
    ]);

    const [lines] = useState([
            { editionDate: '2012-01-10', fulfillmentDate: '2012-01-10', client: 'CGI', ref: '123', nature: 'Presta 10j', ht: 3000, ttc: 3300, tva: 300 },
            { editionDate: '2012-01-10', fulfillmentDate: '2012-01-10', client: 'CGI', ref: '123', nature: 'Presta 10j', ht: 3000, ttc: 3300, tva: 300 },
            { editionDate: '2012-01-10', fulfillmentDate: '2012-01-10', client: 'CGI', ref: '123', nature: 'Presta 10j', ht: 3000, ttc: 3300, tva: 300 },
            { editionDate: '2012-01-10', fulfillmentDate: '2012-01-10', client: 'CGI', ref: '123', nature: 'Presta 10j', ht: 3000, ttc: 3300, tva: 300 },
            { editionDate: '2012-01-10', fulfillmentDate: '2012-01-10', client: 'CGI', ref: '123', nature: 'Presta 10j', ht: 3000, ttc: 3300, tva: 300 },
            { editionDate: '2012-01-10', fulfillmentDate: '2012-01-10', client: 'CGI', ref: '123', nature: 'Presta 10j', ht: 3000, ttc: 3300, tva: 300 },
    ]);

    if (selectedInvoice) {
        return (
            <Invoice parameters={parameters} invoice={selectedInvoice}></Invoice>
        );
    } else {
        const thead = cols.map((col, colNumber) => (<th key={`header-cell-${colNumber}`}>{ col.label }</th>));
        const tbody = lines.map((line, lineNumber) => {
            const td = cols.map((col, colNumber) => (<td key={`body-cell-${lineNumber}-${colNumber}`}>{ line[col.code] }</td>));
            return (<tr key={`body-row-${lineNumber}`}>
                { td }
                <td>
                    <button className="ui icon button green" 
                            onClick={() => setSelectedInvoice(() => line)}
                            title="Facture">
                        <i aria-hidden="true" className="file alternate icon"></i>
                    </button>
                </td>
            </tr>);
        });
        const tfoot = cols.map((col, colNumber) => (<td key={`footer-cell-${colNumber}`}><div className="ui input"><input type="text" placeholder={ col.label } /></div></td>));
        tbody.push((<tr key={`footer`}>{ tfoot }</tr>));
        return (
        <article>
            <table className="ui table small compact blue">
                <thead><tr>{ thead }</tr></thead>
                <tbody>
                    { tbody }
                </tbody>
            </table>
        </article>
        );
    }
}