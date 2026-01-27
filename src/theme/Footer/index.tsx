import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useThemeConfig, type Footer, type FooterLinkItem} from '@docusaurus/theme-common';
import styles from './styles.module.css';

type FooterLinkProps = {
  item: FooterLinkItem;
};

function isExternalUrl(url?: string): boolean {
  return Boolean(url && /^https?:\/\//i.test(url));
}

function FooterLink({item}: FooterLinkProps) {
  if (item.html) {
    return (
      <span
        className="footer__link-item"
        dangerouslySetInnerHTML={{__html: item.html}}
      />
    );
  }

  if (!item.label) {
    return null;
  }

  const href = item.href ?? undefined;
  const to = item.to ?? undefined;
  const isExternal = isExternalUrl(href);

  return (
    <Link
      className={clsx('footer__link-item', item.className)}
      to={to}
      href={href}
      {...(isExternal ? {target: '_blank', rel: 'noopener noreferrer'} : {})}
    >
      {item.label}
    </Link>
  );
}

export default function FooterLayout(): JSX.Element | null {
  const {footer, title, tagline} = useThemeConfig();

  if (!footer) {
    return null;
  }

  const renderLinks = (footerConfig: Footer) => {
    if ('links' in footerConfig && Array.isArray(footerConfig.links)) {
      return footerConfig.links.map((linkSection, index) => (
        <div
          key={`${linkSection.title ?? 'links'}-${index}`}
          className={clsx('col footer__col', styles.footerLinkSection)}
        >
          {linkSection.title && (
            <h4 className={styles.footerLinkTitle}>{linkSection.title}</h4>
          )}
          <ul className="footer__items clean-list">
            {linkSection.items.map((item, itemIndex) => (
              <li key={itemIndex} className="footer__item">
                <FooterLink item={item} />
              </li>
            ))}
          </ul>
        </div>
      ));
    }

    return null;
  };

  return (
    <footer className={clsx('footer', 'footer--dark')}>
      <div className="container container-fluid">
        <div className={styles.footerRow}>
          <div className={styles.footerInfoCol}>
            <div className={styles.footerSiteTitle}>{title}</div>
            {tagline && <p className={styles.footerTagline}>{tagline}</p>}
            {footer.copyright && (
              <div
                className={clsx('footer__copyright', styles.footerCopyright)}
                dangerouslySetInnerHTML={{__html: footer.copyright}}
              />
            )}
          </div>
          <div className={styles.footerLinksCol}>
            <div className="row">{renderLinks(footer)}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}