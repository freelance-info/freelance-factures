import React, { useState, useEffect } from 'react';
import { Input, Table } from 'semantic-ui-react';
import './Invoice.css';
import { printToPdf } from '../helpers/print';

const detailsCols = [
    { code: 'quantity', label: "Quantité" },
    { code: 'unitPrice', label: "Prix unitaire HT" },
    { code: 'fulfillmentDate', label: "Date de la vente ou de la prestation de service" },
    { code: 'seller', label: "Identité du vendeur ou prestataire" },
    { code: 'order', label: "Numéro du bon de commande" },
    { code: 'tvaId', label: "Numéro individuel d'identification à la TVA" },
    { code: 'priceIncrease', label: "Majoration de prix" },
    { code: 'tvaRate', label: "Taux de TVA" },
    { code: 'tva', label: "Montant total de la TVA" },
    { code: 'priceDiscount', label: "Réduction de prix" },
    { code: 'ht', label: "Somme totale à payer HT" },
    { code: 'paymentDate', label: "Date à laquelle le règlement doit intervenir"},
    { code: 'paymentInAdvanceConditions', label: "Conditions d'escompte en cas de paiement anticipé"},
    { code: 'paymentInAdvanceDiscount', label: "Escompte pour paiement anticipé"},
    { code: 'latePaymentPenaltyRate', label: "Taux des pénalités de retard"},
    { code: 'debtCollectionCompensation', label: "Mention de l'indemnité forfaitaire pour frais de recouvrement"},
];

// Facture
export default function Invoice({ parameters, invoice }) {
    return (
    <section>
        <button className="ui icon button green" 
                onClick={() => printToPdf()}
                title="Facture">
            <i aria-hidden="true" className="print icon"></i>
        </button>
        <div className="invoice-box">
            <table cellpadding="0" cellspacing="0">
                <tr className="top">
                    <td colspan="2">
                        <table>
                            <tr>
                                <td className="title">
                                    <img src="https://www.sparksuite.com/images/logo.png" style={{ width: '100%',  maxWidth: '300px' }} />
                                </td>
                                
                                <td>
                                    Invoice #: 123<br />
                                    Created: January 1, 2015<br />
                                    Due: February 1, 2015
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                
                <tr className="information">
                    <td colspan="2">
                        <table>
                            <tr>
                                <td>
                                    Sparksuite, Inc.<br />
                                    12345 Sunny Road<br />
                                    Sunnyville, CA 12345
                                </td>
                                
                                <td>
                                    Acme Corp.<br />
                                    John Doe<br />
                                    john@example.com
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                
                <tr className="heading">
                    <td>
                        Payment Method
                    </td>
                    
                    <td>
                        Check #
                    </td>
                </tr>
                
                <tr className="details">
                    <td>
                        Check
                    </td>
                    
                    <td>
                        1000
                    </td>
                </tr>
                
                <tr className="heading">
                    <td>
                        Item
                    </td>
                    
                    <td>
                        Price
                    </td>
                </tr>
                
                <tr className="item">
                    <td>
                        Website design
                    </td>
                    
                    <td>
                        $300.00
                    </td>
                </tr>
                
                <tr className="item">
                    <td>
                        Hosting (3 months)
                    </td>
                    
                    <td>
                        $75.00
                    </td>
                </tr>
                
                <tr className="item last">
                    <td>
                        Domain name (1 year)
                    </td>
                    
                    <td>
                        $10.00
                    </td>
                </tr>
                
                <tr className="total">
                    <td></td>
                    
                    <td>
                    Total: $385.00
                    </td>
                </tr>
            </table>
        </div>
    </section>
    );
}