import React from 'react';

export const STRIPE_PUBLIC_KEY = 'pk_test_51MzSDFAD2Q8nCGfHavlrLvpu9xmFbAkXEBquuDoWHlkBJEO6jFg85trsrpd9hFEmTuFMEwwdmCegs56wo1kjxujI00VGokeTj4';

export const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} >{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} >{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} >{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      case 'bulleted-list':
        return <ul>
            {
                obj?.children.map((item) => item.children.map((bullet) => bullet?.children.map((text, i) => <li key={i}>{text?.text}</li>)))
            }
        </ul>
      default:
        return modifiedText;
    }
  };