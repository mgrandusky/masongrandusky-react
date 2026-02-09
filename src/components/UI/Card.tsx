import type { CardProps } from '../../types';

export default function Card({ className = '', children }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
}
