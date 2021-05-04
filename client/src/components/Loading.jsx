import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ReactComponent as LoadingIcon } from '../svgs/loader.svg';

export default function Loading({ delay }) {
  const [delayed, setDelayed] = useState(true);

  // Only load fallback after a delay to prevent ui flash
  useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), delay);
    return clearTimeout(timeout);
  }, [delay]);

  return (
    !delayed && (
      <div className="container mx-auto max-w-screen-lg h-screen">
        <div className="flex justify-center items-center h-full">
          <LoadingIcon />
        </div>
      </div>
    )
  );
}

Loading.propTypes = {
  delay: PropTypes.number
};
