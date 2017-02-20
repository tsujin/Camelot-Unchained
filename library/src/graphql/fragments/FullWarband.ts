/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @Author: JB (jb@codecorsair.com)
 * @Date: 2017-02-13 16:27:49
 * @Last Modified by: JB (jb@codecorsair.com)
 * @Last Modified time: 2017-02-16 12:18:07
 */
import gql from 'graphql-tag';

import {faction, race, gender, archetype} from '../../';
import FullWarbandMemberFragment, { FullWarbandMember}  from './FullWarbandMember';
import CustomRankFragment, {CustomRank} from './CustomRank';

export default gql`
fragment FullWarband on WarbandQLType {
  id
  name
  realm
  creator
  created
  ranks {
    ...CustomRank
  }
  members {
    ...FullWarbandMember
  }
}
${CustomRankFragment}
${FullWarbandMemberFragment}
`;

export interface FullWarband {
  id : string;
  name : string;
  realm : faction;
  creator : string;
  created : string;
  ranks : CustomRank[];
  members : FullWarbandMember[];
}
