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

package com.vmware.mangle.unittest.faults.plugin.helpers;

import com.vmware.mangle.cassandra.model.tasks.commands.CommandExecutionResult;

/**
 * Utility class with utility method to initialize the CommandExecutionResult
 *
 * @author hkilari
 *
 */
public class CommandResultUtils {
    /**
     * @param output
     * @return
     */
    private CommandResultUtils() {
    }

    public static CommandExecutionResult getCommandResult(String output) {
        CommandExecutionResult commandExecutionResult = new CommandExecutionResult();
        commandExecutionResult.setCommandOutput(output);
        commandExecutionResult.setExitCode(0);
        return commandExecutionResult;
    }

    public static CommandExecutionResult getFailureErrorCodeCommandResult(String output) {
        CommandExecutionResult commandExecutionResult = new CommandExecutionResult();
        commandExecutionResult.setCommandOutput(output);
        commandExecutionResult.setExitCode(1);
        return commandExecutionResult;
    }
}
