/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 *
 * This product is licensed to you under the Apache License, Version 2.0 (the "License").
 * You may not use this product except in compliance with the License.
 *
 * This product may include a number of subcomponents with separate copyright notices
 * and license terms. Your use of these subcomponents is subject to the terms and
 * conditions of the subcomponent's license, as noted in the LICENSE file.
 */

package com.vmware.mangle.services.events.schedule;

import lombok.Data;
import lombok.EqualsAndHashCode;

import com.vmware.mangle.services.cassandra.model.events.basic.Event;

/**
 *
 *
 * @author chetanc
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class ScheduleUpdatedEvent extends Event {
    private static final long serialVersionUID = 1L;
    private String scheduleID;
    private String scheduleStatus;

    public ScheduleUpdatedEvent(String scheduleId, String scheduleStatus) {
        super("ScheduleUpdatedEvent",
                "Scheduler with the Id " + scheduleId + " is updated to status:" + scheduleStatus);
        this.scheduleID = scheduleId;
        this.scheduleStatus = scheduleStatus;
    }
}