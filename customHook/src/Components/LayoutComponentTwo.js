import useWindowWidth from '../hooks/useWindowWidth';

export default function LayoutComponent() {
    const onSmallScreen = useWindowWidth(768);
    return (
        <div className={onSmallScreen ? 'small' : 'large'}>
            <h1>This is another compoenent device</h1>
        </div>
    );
}
