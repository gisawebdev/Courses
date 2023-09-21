import { LoadingIcon } from '../../shared/components/LoadingIcon';
import { useLabels } from '../hooks/useLabels';

interface Props {
	seletedLabels: string[];
	onChange: (labelName: string) => void;
}

export const LabelPicker = ({ onChange, seletedLabels }: Props) => {
	const labelQuery = useLabels();

	if (labelQuery.isLoading) {
		return <LoadingIcon />;
	}

	return (
		<div>
			{labelQuery.data?.map((label) => (
				<span
					key={label.id}
					className={`badge rounded-pill m-1 label-picker ${
						seletedLabels.includes(label.name) ? 'label-active' : ''
					}`}
					style={{
						border: `1px solid #${label.color}`,
						color: `#${label.color}`,
					}}
					onClick={() => onChange(label.name)}>
					{label.name}
				</span>
			))}
		</div>
	);
};
