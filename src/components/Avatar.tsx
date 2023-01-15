import styles  from './Avatar.module.css';

export function Avatar({hasBorder = true, src} :any) {
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
    );
}