import React from 'react';
import ProtectedRoute from '../../ProtectedRoute';
import Lists from '../Lists/Lists';
import Media from '../Media/Media';

export default function ProjectRoutes() {
  return (
    <>
      <ProtectedRoute exact path="/:projectId" component={Lists} />
      <ProtectedRoute exact path="/:projectId/media" component={Media} />
    </>
  );
}
