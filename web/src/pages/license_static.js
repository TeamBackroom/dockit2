import React from 'react';
import { Box } from '@material-ui/core';

export default function TermsStatic() {
  const terms = [
    {
      n: '1.',
      s: 'OWNERSHIP:',
      t: `The Software is licensed, not sold. You acknowledge that the Software is the property of the Company and/or its licensors. As Licensee, you own the media upon which the Software is recorded or fixed, but title to the Software (including each copy of the Software) and all related intellectual property rights embodied in or represented by the Software is and will remain with the Company and/or its licensors at all times. All rights and licenses not expressly granted are reserved to the Company, and there shall be no licenses or rights implied under this Agreement, based on any course of conduct, or otherwise.`,
    },
    {
      n: '2.',
      s: `LICENSE GRANT: Subject to the terms and conditions of this Agreement, the Company, under its Intellectual Property Rights, hereby grants to Licensee:`,
      terms: [
        {
          n: '2.1',
          s: `To the extent your Order Form identifies the license purchased as a perpetual license: a non-exclusive, non-transferable, non-assignable license to access, execute, display, perform, and otherwise use the Software, in machine-readable object code, solely for the number of authorized users set forth on your Order Form (if applicable) on a single computer system, or, in the case of a multi-user or networked system which permits access to the Software by more than one user at the same time, at a single network station for each user license purchased (additional licenses must be purchased for each added network user, while purchased licenses may be reassigned to new users as long as there is only one user per license). In addition, for so long as you are current in your payment of Maintenance Fees: a limited, non-exclusive, non-transferable license to access, execute, display, perform, and otherwise use the Web Features, in machine-readable object code, solely within the scope of the license granted in this section, as applicable based upon your Order Form. “Web Features” means additional functionality complementary to the Software and available online, including any mobile or browser-based applications, and such other features or functionality as the Company may make available from time-to-time. Web-features do not include the Company’s web-based case management product, nor any web-based modules that are not typically included with the Company’s software.`,
        },
        {
          n: '2.2',
          s: `To the extent your Order Form identifies the license purchased as a subscription: provided that you have paid the subscription fee (the “Subscription Fee”), a limited, non-exclusive, non-transferable license during the subscription term to access, execute, display, perform, and otherwise use the Software, in machine-readable object code, solely for the number of authorized users set forth on your Order Form (if applicable).`,
        },
        {
          n: '2.3',
          s: `In the case of Section 2.1, Licensee shall be entitled to make one (1) copy of the Software, including any client-side components of the Software (if applicable), in machine readable form solely for archival or backup purposes provided you include the Company’s copyright notice(s) and any proprietary legend(s). The preceding sentence is not applicable to web-based software.`,
        },
      ],
    },
    {
      n: '3.',
      s: `RESTRICTIONS: During the term of your license and/or subscription, you agree to comply with the following restrictions and limitations, and you agree not to permit others to violate them:`,
      terms: [
        {
          n: '3.1',
          s: `You shall: (i) adopt and enforce such internal policies, procedures and monitoring mechanisms as are reasonably necessary to ensure that the Software is used only in accordance with the terms of this Agreement and (ii) take all steps necessary to ensure that no person or entity will have unauthorized access to the Software.`,
        },
        {
          n: '3.2',
          s: `You shall not: (i) copy (except as provided above), sell, rent, assign, sublicense, lease, encumber or otherwise transfer or attempt to transfer the Software, Web Features, or any portion thereof; (ii) permit any third party to use or have access to the Software or Web Features, whether by timesharing, networking (except as expressly permitted hereunder) or any other means; (iii) reverse engineer, decompile, disassemble, or otherwise seek to discover the source code of the Software or Web Features; (iv) remove any copyright, trademark, patent or other proprietary notices from the Software or Web Features or any portion thereof; (v) modify, disable, circumvent, avoid, bypass, remove, deactivate, impair or otherwise interfere with features of the Software or Web Features that enforce license restrictions or limits or report technical or statistical information regarding the Software or Web Features or its use to the Company; (vi) create a derivative work of any part of the System; or (vii) build modules on top of the System that communicate with or otherwise form a part of the System, or add user defined fields or other modifications or customizations of the Software, for the purposes of third-party applications for which a fee is charged by such third-parties (for purposes of clarification, you may pay fees to third parties for the custom creation of integrated modules, user defined fields, and other customizations for firm-specific, internal purposes only, and which do not form part of any add-on applications, modules or services for which a fee is charged). Notwithstanding the aforementioned, the Company permits certain third-parties to integrate into, build modules on, or create customizations for the Software for which a fee is charged. A list of these third-parties will be provided by the Company upon request.`,
        },
        {
          n: '3.3',
          s: `You shall supervise all third parties to which you grant access to the Software, to ensure they comply with all obligations relating to the Company’s IP and other rights.`,
        },
      ],
    },
    {
      n: '4.',
      s: 'USAGE VERIFICATION/DATA:',
      t: `Licensee acknowledges that the Software includes a self-audit capability that will periodically connect to the Internet and transmit back to the Company usage data for purposes of license validation, auditing, verifying compliance with licensing terms, as well as statistical information about Licensee’s use of the Software and its functions, and aggregate input data for the purposes of generating statistical metrics and analytics on an aggregated and de-identified basis (collectively, “Usage Data”). The Company shall be entitled to use such aggregated and de-identified Usage Data for purposes of improving its products and services, including the addition of smart features such as case valuation and process automations. The Company will use such Usage Data only in accordance with applicable law. To the extent any personal information is collected in this process, the Company shall only use such personal information in accordance with the Company’s Privacy Policy.`,
    },
    {
      n: '5.',
      s: `THIRD PARTY SOFTWARE:`,
      terms: [
        {
          n: '5.1',
          s: `If the Company provides, includes, or resells any third-party software to Licensee, such third-party software is provided with the rights set forth in the applicable third-party license terms, and is provided by the Company “AS IS” with no warranties. Such third-party license terms do not apply to the proprietary Software owned by the Company.`,
        },
        {
          n: '5.2',
          s: `The on-premise Software includes a third-party deployment tool through which the Company can automatically deploy Software updates. While the Company endeavors to select high-quality third-party tools, the Company cannot and does not warrant the quality of such third-party tools and disclaims any and all liability related to the installation and use of such tool.`,
        },
      ],
    },
    {
      n: '6.',
      s: 'PAYMENT AND TAXES:',
      t: `You agree to pay all applicable fees and other charges for Software, as provided in your Order Form. Unless prepaid, all fees and charges are payable in U.S. dollars and are due upon invoice receipt, unless otherwise provided on the invoice or Order Form. The Company shall be entitled to charge a late fee of 1.5% per month or the maximum rate allowable by law, whichever is lower, on any balance remaining unpaid for more than thirty (30) days. Prices are exclusive of all applicable taxes. You agree to pay all taxes (including but not limited to sales, use, excise, and value-added taxes), tariffs, duties, customs fees or similar charges imposed or levied on all Software licensed hereunder, with the exception of taxes on the Company’s net income.`,
    },
    {
      n: '7.',
      s: `TERM AND TERMINATION:`,
      terms: [
        {
          n: '7.1',
          s: `To the extent your Order Form identifies the license purchased as a perpetual license: This Agreement is effective as of the date you accept this Agreement and shall continue in force until terminated, or until you no longer use the Software and destroy the Software together with all copies or modifications thereto. Your right to access and use the Web Features shall terminate on the last day of the then-current month if you fail to pay the Maintenance Fee for the following period.`,
        },
        {
          n: '7.2',
          s: `To the extent your Order Form identifies the license purchased as a subscription: This Agreement is effective for so long as you continue to pay the Subscription Fee. Your right to access and use the Software and Web Features shall terminate on the last day of the then-current month if you fail to pay the Subscription Fee for the following period.`,
        },
        {
          n: '7.3',
          s: `You may terminate this Agreement at any time by destroying the Software together with all copies or modifications in any form. The Company will have the right to terminate this Agreement immediately if you fail to comply with any term or condition of this Agreement.`,
        },
        {
          n: '7.4',
          s: `The terms contained in Sections 1, 3, 6, 11 and 12 survive termination of this Agreement.`,
        },
      ],
    },
    {
      n: '8.',
      s: 'MAINTENANCE AND SUPPORT:',
      t: `Subject to the terms of this Agreement and for so long as Licensee is current in its payment of Maintenance Fees and/or Subscription Fees, the Company will provide certain maintenance and support services to Licensee, as further provided herein. Support for the Software may be accessed via email, phone or other contact information provided on the Company’s website (if applicable). The Company will use commercially reasonable efforts to respond to support requests submitted during the Company’s business hours. For so long as Licensee is current in its payment of Maintenance Fees and/or Subscription Fees, maintenance and support will include the Company’s provision of such updates and upgrades (including error corrections and bug fixes) as the Company develops in its ordinary course of business. Any technical information you provide the Company in connection with support services it provides you may be used by the Company for purposes of providing, developing or improving its products and services. Support hours may be adjusted in response to changes in call volume or distribution. If Licensee cancels Maintenance and Support and then wishes to reinstate these services, Licensee is subject to a Reinstatement Fee in addition to Maintenance Fees. The Reinstatement Fee includes, but is not limited to, all unpaid Maintenance Fees during the period (based in months) of the interruption of service and a penalty of 30% of such unpaid fees.`,
    },
    {
      n: '9.',
      s: 'ADDITIONAL SERVICES:',
      t: `For the avoidance of doubt, the Licensee acknowledges that this Agreement does not include data conversion, document coding, report writing, hosting or any services other than those expressly set out in this Agreement. To the extent your Order Form includes any such services, those services are provided subject to the Company’s standard Terms of Service.`,
    },
    {
      n: '10.',
      s: `LIMITED WARRANTY; DISCLAIMERS:`,
      terms: [
        {
          n: '10.1',
          s: `The Company warrants only that the media upon which the Software is furnished (if applicable) will be free from defects in material or workmanship under normal use and service for a period of (30) days from the date of delivery to you. Notwithstanding the foregoing, the Company will not be responsible for (i) any breach of warranty not reported during the warranty period; (ii) any malfunctioning of Software that you, an end user, or a third party has modified, misused, or damaged; (iii) any malfunctioning of Software and/or Web Features caused by hardware or network configuration, or (iv) any malfunctioning of Software and/or Web Features caused by third party software or services.`,
        },
        {
          n: '10.2',
          s: `THE COMPANY DOES NOT AND CANNOT WARRANT THE PERFORMANCE OR RESULTS YOU MAY OBTAIN BY USING THE SOFTWARE, WEB FEATURES, OR DOCUMENTATION. THE FOREGOING STATES THE SOLE AND EXCLUSIVE REMEDY THE COMPANY WILL PROVIDE FOR BREACH OF WARRANTY. EXCEPT FOR THE FOREGOING LIMITED WARRANTY, THE COMPANY MAKES NO WARRANTIES, EXPRESS OR IMPLIED, AS TO INFRINGEMENT OF THIRD-PARTY RIGHTS, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. IN PARTICULAR, THE COMPANY DOES NOT REPRESENT THAT THE SOFTWARE OR WEB FEATURES ARE ERROR FREE, WILL OPERATE IN AN UNINTERRUPTED MANNER, ARE COMPLETELY SECURE, OR WILL INTEROPERATE WITH THIRD PARTY SOFTWARE OR SERVICES. UNLESS YOU HAVE SUBSCRIBED TO A SERVICES OFFERING THAT GUARANTEES A PARTICULAR LEVEL OF SERVICE AND/OR A FIXED TERM OF SERVICE, ALL SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS AND ARE SUBJECT TO CHANGE OR TERMINATION AT ANY TIME AND FOR ANY REASON WITHOUT NOTICE. Some states do not allow the exclusion of implied warranties or limitations on how long an implied warranty may last, so the above limitations may not apply to you. This warranty gives you specific legal rights and you may also have other rights which vary from state to state.`,
        },
        {
          n: '10.3',
          s: `No Legal Advice. The Company is not a law firm, and neither the Company nor the Software provides legal advice. No attorney-client relationship is created by this Agreement or by the provision or use of the Software. The Software is provided for assistance in case management only, and is not a substitute for professional legal advice, interpretation or judgment.
    Limitation of Remedies: The Company’s entire liability and your exclusive remedy shall be (a) the replacement of any media not meeting the Company’s limited warranty which is returned to the Company; or (b) if the Company is unable to deliver replacement media which is free of defects in materials of workmanship, you may terminate this Agreement by returning the Software and your money will be refunded.`,
        },
      ],
    },
    {
      n: '11.',
      s: `LIMITATION OF LIABILITY:`,
      terms: [
        {
          n: '11.1',
          s: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER THE COMPANY NOR ANY OF ITS OWNERS, DIRECTORS, OFFICERS, EMPLOYEES, OR LICENSORS (EACH, A “RELEASED PARTY”), WILL HAVE ANY LIABILITY TO YOU OR ANY END USERS FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING, WITHOUT LIMITATION, ANY LOSS OF DATA, LOSS OF USE, LOST PROFITS, BUSINESS OR REVENUE, LOSS OF GOODWILL OR OTHER ECONOMIC ADVANTAGE, OR LOSS OF PRIVACY) ARISING OUT OF OR RELATED TO THIS AGREEMENT, OR THE SOFTWARE, EVEN IF THE COMPANY OR A RELEASED PARTY HAS BEEN ADVISED OF, OR KNEW OR SHOULD HAVE KNOWN OF, THE POSSIBILITY OF SUCH DAMAGES.`,
        },
        {
          n: '11.2',
          s: `WITHOUT LIMITING THE SCOPE OR EFFECT OF SECTION 11.1 ABOVE, IN NO EVENT WILL THE COMPANY’S AND THE RELEASED PARTIES’ TOTAL LIABILITY WITH RESPECT TO ALL CLAIMS ARISING OUT OF OR RELATED TO THIS AGREEMENT, THE SOFTWARE OR WEB FEATURES (INCLUDING CLAIMS OF NEGLIGENCE AND STRICT LIABILITY) EXCEED THE LOWER OF (i) THE AGGREGATE DIRECT DAMAGES ACTUALLY INCURRED BY YOU AND YOUR END USERS, OR (ii) THE TOTAL MAINTENANCE AND/OR SUBSCRIPTION FEES PAID BY YOU TO THE COMPANY FOR THE SPECIFIC PRODUCT TO WHICH THE LIABILITY PERTAINS IN THE PRECEDING TWELVE (12) MONTHS.`,
        },
        {
          n: '11.3',
          s: `Some states do not allow the exclusion or limitation of special, incidental, or consequential damages, so the above limitation or exclusion may not apply to you.`,
        },
      ],
    },
    {
      n: '12.',
      s: 'GENERAL:',
      t: `You acknowledge that you have read this Agreement, understand it, and that by installing the software you agree to be bound by its terms and conditions. You further agree that it is the complete and exclusive statement of the agreement between the Company and you which supersedes any proposal or prior agreement, oral or written, and any other communication between the Company and you relating to the subject matter of this Agreement. Notwithstanding the aforementioned, to the extent that the Order Form provides additional terms, such terms are incorporated into this Agreement. If the terms of this Agreement and the Order Form conflict, the terms of this Agreement shall control, except for the following terms which shall be controlled by the Order Form: price, quantity, subscription period, items purchased, and payment obligations. This Agreement shall be governed by the laws of the State of Florida. Any dispute hereunder will be submitted to arbitration in accordance with the Commercial Rules of Arbitration of the American Arbitration Association, in Miami, Florida. YOU HEREBY KNOWINGLY, VOLUNTARILY, AND INTENTIONALLY WAIVE ANY RIGHTS YOU MAY HAVE TO A TRIAL BY JURY IN ANY LAWSUIT OR PROCEEDING RELATING TO OR ARISING OUT OF, UNDER, OR IN CONNECTION WITH THIS LICENSE AGREEMENT, WHETHER ARISING OUT OF CONTRACT, TORT OR OTHERWISE, AND ANY RIGHT TO ASSERT ANY CLAIMS AGAINST THE COMPANY AS A REPRESENTATIVE OR MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION, EXCEPT WHERE SUCH WAIVER IS PROHIBITED BY LAW OR DEEMED BY A COURT OF LAW TO BE AGAINST PUBLIC POLICY. TO THE EXTENT EITHER PARTY IS PERMITTED BY LAW OR COURT OF LAW TO PROCEED WITH A CLASS OR REPRESENTATIVE ACTION AGAINST THE OTHER, THE PARTIES AGREE THAT: (I) THE PREVAILING PARTY SHALL NOT BE ENTITLED TO RECOVER ATTORNEYS’ FEES OR COSTS ASSOCIATED WITH PURSUING THE CLASS OR REPRESENTATIVE ACTION (NOT WITHSTANDING ANY OTHER PROVISION IN THIS AGREEMENT); AND (II) THE PARTY WHO INITIATES OR PARTICIPATES AS A MEMBER OF THE CLASS WILL NOT SUBMIT A CLAIM OR OTHERWISE PARTICIPATE IN ANY RECOVERY SECURED THROUGH THE CLASS OR REPRESENTATIVE ACTION. No delay or omission by either party to exercise any right or power arising upon the other party’s nonperformance or breach will impair that right or power or be construed as a waiver of it. Any waiver must be in writing and signed by the waiving party. A waiver on one occasion will not be construed as a waiver of any subsequent event of nonperformance or breach. If any provision of this Agreement is declared to be unenforceable for any reason, the remainder of this Agreement will continue in full force and effect, and the unenforceable provision will be deemed modified to the extent necessary to comply with the applicable requirements of law, while retaining to the maximum extent permitted by law its intended effect, scope and economic effect.`,
    },
  ];

  return (
    <>
      {terms.map(l1 => (
        <Box mt={5}>
          <strong>{`${l1.n} ${l1.s}`}</strong>
          {l1.t && <Box>{l1.t}</Box>}
          {l1.terms &&
            l1.terms.map(l2 => (
              <Box mt={1} pl={4}>
                <Box display="flex">
                  <Box>{l2.n}</Box>
                  <Box pl={1}>{l2.s}</Box>
                </Box>
                {l2.terms &&
                  l2.terms.map(l3 => (
                    <Box mt={1} pl={4}>
                      <Box display="flex">
                        <Box>{l3.n}</Box>
                        <Box pl={1}>{l3.s}</Box>
                      </Box>
                    </Box>
                  ))}
              </Box>
            ))}
        </Box>
      ))}
    </>
  );
}
