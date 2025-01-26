export default function ContributionCard({ data, isOpen, onToggle } : {
    data?: any;
    isOpen?: boolean;
    onToggle?: () => void;
}) {
    return (
        <div>
            {isOpen}
        </div>
    )
}