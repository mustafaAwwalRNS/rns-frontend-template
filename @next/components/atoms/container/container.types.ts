export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Add padding to the container.
   */
  spacing?: number;
  /**
   * Take full width of the container
   */
  fluid?: boolean;
}
